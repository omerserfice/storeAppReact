import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getAllCategories } from '../../Redux/Actions/categoryAction';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCat } from '../../services/CategoryService';
import Swal from "sweetalert2";
const AdminCategory = () => {
    const [refresh, setRefresh] = useState(1)
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.categoryReducers.categoriesAllData)

    useEffect(() => {

        {
            dispatch(getAllCategories())
        }

    }, [false]);

    const deleteCategory = (id) => {

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
                deleteCat(id).then(res => {
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
                <div className='alert alert-info text-center'>Kategori Listesi</div>
                <div>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Kategori Adı</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryData.map((item, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <a href={`/admin/updatecategory/${item.id}`} className='btn btn-warning btn-sm text-light'>Edit</a>
                                                    <a className='btn btn-danger btn-sm' onClick={() => deleteCategory(item.id)}>X</a>
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

export default AdminCategory