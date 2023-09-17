
import React,{useEffect} from 'react'
import { getAllCategories } from '../Redux/Actions/categoryAction';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {

  const dispatch = useDispatch();
  const categoryData = useSelector(state => state.categoryReducers.categoriesAllData)

  useEffect(() => {
       
    {
      dispatch(getAllCategories())
    }
   
  },[]);

 
  return (
   <>
   <div className='container'>
   <h2 className='text-center my-4 display-6'>Kategoriler</h2>
  
   <ul className='list-group shadow'>
     {
      categoryData.map((item,key) => {
       return(
        <li key={key} className='list-group-item'>{item.name}</li>
       )
      })
     }  
   </ul>
   </div>
   </>
   
  )
}

export default Category