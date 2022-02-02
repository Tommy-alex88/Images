import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-refuge-66454.herokuapp.com/",
});

export default instance;
