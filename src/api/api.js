import axios from "axios";

const instance = axios.create({
  baseURL: "https://utility.pinkytravels.com", // Base URL for all requests
  headers: {
    "Content-Type": "application/json", // Sets default Content-Type for all requests
  },
});

export default instance;
