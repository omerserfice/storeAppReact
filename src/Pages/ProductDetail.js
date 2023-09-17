import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {getProductsDetail} from '../Redux/Actions/productDetailAction';
import { apiURL } from '../Redux/config';
const ProductDetail = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => state.productDetailReducers.productDetailData);
    const { id } = useParams();

   

 
useEffect(() => {
     
  dispatch(getProductsDetail(id))

}, [])




  return (
    <>
    <div className='container'>
    <div className='display-6 text-center my-2'>
     Ürün Detay
    </div>
    <hr/>
    <div className='text-center'>
     <img style={{width:300,height:300}} src={`${apiURL}/ProductCoverImage/${id}`}/>
     <h6 className='text-danger' style={{fontSize:30}}><strong>{store.message?.price} ₺</strong></h6>
     <p><strong>Ürün Adı: </strong>{store.message?.name}</p>
     <p><strong>Ürün Açıklama: </strong>{store.message?.productDetail}</p>
     <div className='btn btn-group'>
     <a href='' className='btn btn-primary btn-sm'>Sepete Ekle</a>
     <a href='' className='btn btn-outline-primary btn-sm'>Devam Et</a>
     <a href='' className='btn btn-primary btn-sm'>Geri Dön</a>
     
    </div>
    </div>
   
    </div>

    </>
  )
}

export default ProductDetail