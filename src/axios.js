import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/amazon-clone/api"'
    // "http://localhost:5001/amazon-clone/api",
    // "https://clone-459ef.web.app/api"
});

export default instance;

