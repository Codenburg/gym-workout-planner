import axios from "axios";

const useAxios = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
export default useAxios;
