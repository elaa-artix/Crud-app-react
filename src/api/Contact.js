import axios from "axios";

export default axios.create({
   baseURL: "http://localhost:3006/",
   headers: {"Access-Control-Allow-Origin": "*"}
});
