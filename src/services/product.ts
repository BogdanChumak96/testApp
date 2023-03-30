import axios, { AxiosResponse } from "axios";
import { Product } from "../common/types";

const API_URL = "https://dummyjson.com";

axios.defaults.baseURL = API_URL;

export const productService = {
  async getAll() {
    return axios.get("/products");
  },
  async getOne(id: string) {
    return axios.get(`/products/${id}`);
  },
  async deleteById(id: string) {
    return axios.delete(`/products/${id}`);
  },
  async createNewProduct(body: Omit<Product, "id">) {
    return axios.post(`/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  },
  async updateProduct({
    id,
    updatedProduct,
  }: {
    id: number;
    updatedProduct: Omit<Product, "id">;
  }) {
    return axios.put(`/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  },
};
