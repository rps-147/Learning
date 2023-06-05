import axios from "axios";
const API_BASE_ADDRESS = "http://localhost:5000/api";
export default {
  login: (params) => {
    const uri = API_BASE_ADDRESS + "/login";
    return axios.post(uri, params).then((response) => {
      return response;
    });
  },
  signup: (params) => {
    const uri = API_BASE_ADDRESS + "/adduser";
    console.log("Request URI:", uri);
    console.log("Request Params:", params);
    return axios.post(uri, params).then((response) => {
      return response;
    });
  },
}  