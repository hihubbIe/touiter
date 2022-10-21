import axios from "axios";

export default axios.create({
  baseURL: "https://a6da3f89-d3ce-41b9-9ee6-85b851664ee8.mock.pstmn.io",
  headers: {
    "Content-type": "application/json"
  }
});
