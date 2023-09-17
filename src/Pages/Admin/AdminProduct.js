import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllProduct } from '../../Redux/Actions/productAction';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePro } from '../../services/ProductService';
import Swal from "sweetalert2";
import { apiURL } from '../../Redux/config';

const AdminProduct = () => {
    const [refresh, setRefresh] = useState(1)
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productReducer.productsAllData)
     
    console.log(productData)
    useEffect(() => {

        {
         dispatch(getAllProduct())
        }

    }, [false]);

    const deleteProduct = (id) => {

        Swal.fire({
            title: 'Silmek istediğinizden emin misiniz?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet',
            cancelButtonText:'Hayır'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePro(id).then(res => {
                    if (res.data.code.statusCode == 1000) {
                        Swal.fire({
                            title: 'Başarılı',
                            text: 'Silme İşlemi Başarılı',
                            icon: 'success',
                            confirmButtonText: 'Kapat'
                        })
                        setRefresh(false);
                    }
                   
                })
            }
        })
    }

    return (
        <>
            <div className='container'>
                <div className='alert alert-info text-center'>Ürün Listesi</div>
                <div>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Ürün Resmi</th>
                                <th>Ürün Adı</th>
                                <th>Ürün Detayı</th>
                                <th>Ürün Fiyatı</th>
                                 
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.message?.map((item, key) => {
                                    return (
                                        <tr key={key}>
                                            <td><img className='p-2' width={100} height={100} src={`${apiURL}/ProductCoverImage/${item.id}`}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.productDetail}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <a href={`/admin/updateproduct/${item.id}`} className='btn btn-warning btn-sm text-light'>Edit</a>
                                                    <a className='btn btn-danger btn-sm' onClick={() => deleteProduct(item.id)}>X</a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default AdminProduct