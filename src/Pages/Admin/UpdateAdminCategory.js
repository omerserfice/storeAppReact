import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { Label, Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import { addCategory, updateCat } from '../../services/CategoryService';
import Swal from "sweetalert2";
import { useParams } from 'react-router';
import { getCategories } from '../../Redux/Actions/categoryAction';
import { message } from 'antd';

const UpdateAdminCategory = () => {
    
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const store = useSelector(state => state.categoryReducers.categoriesData);

     console.log(store)
    const onSubmit = (data) => {
        
      console.log(data)

      updateCat(data).then(res =>{
        if (res.data.code.statusCode == 1000) {
            Swal.fire({
                title: 'Başarılı',
                text: 'Güncelleme İşlemi Başarılı',
                icon: 'warning',
                confirmButtonText: 'Kapat'
              })
            setTimeout(() => {
                window.location.href = "/admin/category";
            }, 2000);
             
            
        }else{

        }
      })
        

    }
   

    useEffect(() => {
     
        dispatch(getCategories(id))
      
      }, [])
      
     


    return (
        <>
            <div className='container'>
                <h6 className='display-6 my-2 text-center'>Kategori Güncelle</h6>
                <hr />
                <div className='row'>
                    <div className='col-md-6'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label for="">Kategori Adı</Label>
                                <Input type='text' id='name' name='name' innerRef={register({ required: "Boş geçilemez" })}     />
                                <div>
                                    
                                        <i style={{color:'red',fontSize:10}}>{errors.name?.message}</i>
                                    
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Input type='hidden' id='id' name='id' value={id} innerRef={register({ required: "Boş geçilemez" })} />
                            </FormGroup>
                            <Row>
                                <Col>
                                    <div style={{ display: 'flex', justifyContent: "" }}>
                                        <div className='btn-group'>
                                        <Button className='btn-sm' type='submit' color='success'>Kaydet</Button>
                                        
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateAdminCategory