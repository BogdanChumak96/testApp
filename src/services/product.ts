import axios from "axios";

const API_URL = "https://dummyjson.com";

axios.defaults.baseURL = API_URL;

export const productService = {
  async getAll() {
    return axios.get("/products", {});
  },
  async getOne(id) {
    return axios.get(`/products/${id}`);
  },
};
