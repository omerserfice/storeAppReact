import axios from "axios";
import { apiURL } from "../Redux/config";

const addProduct = (data) => {
    return axios.post(`${apiURL}/Product/AddProduct`, data);
}

const deletePro = (id) => {
    return axios.delete(`${apiURL}/Product/DeleteProduct/${id}`)
}

const updatePro = (data) => {
    return axios.put(`${apiURL}/Product/UpdateProduct`,data)
}

export {
    addProduct,deletePro,updatePro
}