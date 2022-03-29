import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://clone-459ef.web.app/api'
    // "http://localhost:5001/amazon-clone/api",
});

export default instance;

