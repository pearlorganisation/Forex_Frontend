import axios from "axios";

export const instance = axios.create({
  baseURL: "https://utility.pinkytravels.com",
  withCredentials: true,
});
