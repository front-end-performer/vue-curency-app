import axios from "axios"; // custome axios instance

const instance = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/"
});

export default instance;
