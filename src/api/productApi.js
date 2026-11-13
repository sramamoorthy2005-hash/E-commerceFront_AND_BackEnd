import axios from "axios";

const url = 'http://127.0.0.1:5000';
const productApi = axios.create({
    baseURL:url,
    headers:{
        'content-type':'application/json',
    },
});

export const getProducts = () => productApi.get('/products');
const getProductById = (id) => productApi.get(`/products/${id}`);