import axios from "axios";
import { apiURL } from "../config";

const getProductsDetail = (id) => dispatch =>{
    return axios.get(`${apiURL}/Product/GetProductById/${id}`)
    .then(response =>{

      
        dispatch({
            type:"GET_DETAIL_PRODUCTS",
            getdata:response.data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

export {getProductsDetail}