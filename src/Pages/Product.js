import React, { useEffect } from 'react'
import {getAllProduct} from '../Redux/Actions/productAction';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';



const Product = () => {

  const dispatch = useDispatch();
  const productData = useSelector(state => state.productReducer.productsAllData)





  useEffect(() => {
    dispatch(getAllProduct())
  }, []);





  return (


    <>
      <div className='container'>
        <h6 className='text-center my-4 display-6'>Ürünler</h6>
        <hr />
        <div className='row'>
          {
            productData.message?.map((item, key) => {
              return (
                <>
                  <div className='col-md-4'>
                  <ProductCard key={key} name={item.name} price={item.price} detail={item.productDetail} productId={item.id} categoryName={item.categoryName}/>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Product