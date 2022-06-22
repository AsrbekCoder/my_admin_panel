import React from "react";
import Api from "../../../server/Api";

const Products = ({ changed }) => {
  const [products, setProducts] = React.useState(null);
  const [checkChange, setCheckChange] = React.useState(true);
  const [searchBy, setSearchBy] = React.useState("");

  const onRemoveProduct = async (id) => {
    await new Api().removeProduct(id);
    setCheckChange(() => !checkChange);
  };
  React.useEffect(() => {
    const fetch = async () => {
      let { data } = await new Api().getAllProduct("getProduct");
      setProducts(data);
    };
    fetch();
  }, [changed, checkChange]);
  return (
    <>
      <ul className="box-info">
        <li>
          <i className="bx bx-shopping-bag"></i>
          <span className="text">
            <h3>{products?.length}</h3>
            <p>Peoducts</p>
          </span>
        </li>
      </ul>
      <div className="table-data" id="box_info">
        <div className="order">
          <div className="head">
            <h3>Products</h3>
            <div className="input_box">
              <i className="bx bx-search"></i>
              <input
                type="search"
                value={searchBy}
                placeholder="Search Product"
                onChange={(e) => setSearchBy(e.target.value)}
              />
            </div>
            <i className="bx bx-filter"></i>
          </div>
          {products?.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>№</th>
                  <th>Product Name</th>
                  <th>Title</th>
                  <th>Img</th>
                  <th>Prise</th>
                  <th>Sizes</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products
                  ?.filter((e) =>
                    e.brand.toUpperCase().includes(searchBy.toLocaleUpperCase())
                  )
                  .map((item, index) => (
                    <tr key={item._id}>
                      <td></td>
                      <td>{index + 1}</td>
                      <td>{item.brand}</td>
                      <td>{item.content}</td>
                      <td>
                        <img
                          className="table_img"
                          src={`http://localhost:5252/${item.productImgUrl}`}
                          alt=""
                        />
                      </td>
                      <td>{item.prise} so'm</td>
                      <td>{item.sizes}</td>
                      <td>
                        <button
                          className="status pending btn"
                          onClick={() => onRemoveProduct(item._id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="add_box">
              <img src="../../assest/add-to-basket.png" alt="" />
              <a href="#scrollto_head">Add some</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
