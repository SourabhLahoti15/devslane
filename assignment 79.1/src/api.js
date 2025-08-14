import axios from "axios";

export function getProducts(sortBy, sortType, search, page) {
    let params = {};
    if (sortBy) params.sortBy = sortBy;
    if (sortType) params.sortType = sortType;
    if (search) params.search = search;
    if (page) params.page = page;
    return axios.get("https://myeasykart.codeyogi.io/products", {
        params,
    });
    // return axios.get("https://dummyjson.com/products");
}

export function getProductById(id) {
    return axios.get(`https://myeasykart.codeyogi.io/product/${id}`)
    // return axios.get(`https://dummyjson.com/products/${id}`);
}

export function getProductByIds(ids) {
    const csvids = ids.join();
    return axios.get(`https://myeasykart.codeyogi.io/products/bulk`, {
        params: {
            ids: csvids
        }
    })
}

export function setCartAPI(cart) {
    return axios.post("https://myeasykart.codeyogi.io/carts", { data: cart }, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    });
}

export function getCartAPI() {
    return axios.get("https://myeasykart.codeyogi.io/carts", {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    });
}