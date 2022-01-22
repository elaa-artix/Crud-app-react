import axios from "axios";

export default axios.create({
   baseURL: "https://enigmatic-caverns-25526.herokuapp.com/",
   headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
   }
   
});
