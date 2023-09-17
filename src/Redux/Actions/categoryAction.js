import { apiURL } from "../config";
import axios from "axios";

const getCategories = (id) =>  dispatch => {

   axios
   .get(`${apiURL}/Category/GetCategoryById/${id}`) 
   .then((response) => {

    dispatch({
        type:"GET_CATEGORIES",
        getData:response.data,
    })
   })
   .catch((err)=>{
    console.log(err);
   });
};

const getAllCategories = () => dispatch =>{
    
    axios
   .get(`${apiURL}/Category/GetListCategory`).then(res=>{
        dispatch({
            type:"GET_ALL_CATEGORIES",
            alldata:res.data
        })
    }).catch((err)=>{
        console.log(err);
    })
}

export  {getAllCategories,getCategories}