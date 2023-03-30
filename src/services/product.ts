import axios from "axios";

const API_URL = "https://dummyjson.com";

axios.defaults.baseURL = API_URL;

export const productService = {
  async getAll() {
    return axios.get("/products");
  },
  async getOne(id) {
    return axios.get(`/products/${id}`);
  },
  async deleteById(id) {
    return axios.delete(`/products/${id}`);
  },
  async createNewProduct(body) {
    return axios.post(`/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  },
  async updateProduct({ id, updatedProduct }) {
    // console.log(updatedProduct);

    return axios.put(`/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  },
};
