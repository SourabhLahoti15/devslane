import axios from "axios"

export function getProducts() {
    return axios.get("https://dummyjson.com/products");
}

export function getProductById(id) {
    return axios.get(`https://dummyjson.com/products/${id}`);
}