import { DJANGO_URL_API } from "@/lib/constants";
import axios from "axios";

const useAxios = axios.create({
  baseURL: DJANGO_URL_API,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
export default useAxios;
