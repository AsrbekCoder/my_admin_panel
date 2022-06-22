import axios from "axios";

let apiUrl = "http://localhost:5252/api/";
class Api {
  getAllProduct(get) {
    return axios.get(`${apiUrl}${get}`);
  }
  removeProduct(id) {
    return axios.delete(`${apiUrl}delete/${id}`);
  }
}

export default Api;
