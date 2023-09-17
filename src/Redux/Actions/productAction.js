import { apiURL } from "../config";
import axios from "axios";

// const getProducts = () =>  dispatch => {

//    axios
//    .get(`${apiURL}/Product/GetProductById`) 
//    .then((response) => {

//     //  console.log(response)

//     dispatch({
//         type:"GET_PRODUCTS",
//         getData:response.data,
//     })
//    })
//    .catch((err)=>{
//     console.log(err);
//    });
// };


const getAllProduct = () => dispatch =>{
    
    axios
   .get(`${apiURL}/Product/GetProductList`).then(res=>{
        dispatch({
            type:"GET_ALL_PRODUCTS",
            allData:res.data
        })
    }).catch((err)=>{
        console.log(err);
    })
}

export {getAllProduct} 