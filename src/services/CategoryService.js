import axios from "axios";
import { apiURL } from "../Redux/config";

const addCategory = (data) => {
    return axios.post(`${apiURL}/Category/AddCategory`, data);
}

const deleteCat = (id) => {
    return axios.delete(`${apiURL}/Category/DeleteCategory/${id}`)
}

const updateCat = (data) => {
    return axios.put(`${apiURL}/Category/UpdateCategory`,data)
}

export {
    addCategory,deleteCat,updateCat
}