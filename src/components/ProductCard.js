import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css';
import { apiURL } from '../Redux/config';

const ProductCard = ({name,price,detail,productId,categoryName}) => {
    return (
        <>
        
           <div className="card shadow" style={{width:'18rem'}}>
            <span className='p-2 text-center text-primary shadow'><i>{categoryName}</i></span>
            <img className='p-2' src={`${apiURL}/ProductCoverImage/${productId}`}/>
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <hr/>
                    <p className='text-danger text-right'><i><strong>{price}</strong></i>₺</p>
                    <p className="card-text">{detail}</p>
                    <div className='btn-group'>
                    <a href="#" className="btn btn-primary btn-sm"> Sepete Ekle</a>
                    <a href={`/productdetails/${productId}`} className="btn btn-outline-primary btn-sm">Detay</a>
                    </div>
                
                </div>
    
           </div>
         
        </>
    )
}

export default ProductCard