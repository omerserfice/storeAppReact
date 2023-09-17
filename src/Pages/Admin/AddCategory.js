import React from 'react'
import { useForm } from 'react-hook-form'
import { Label, Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import { addCategory } from '../../services/CategoryService';
import Swal from "sweetalert2";
const AddCategory = () => {
  
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (data) => {
        
      addCategory(data).then(res => {
       
        if (res.data.code.statusCode == 1000) {
            Swal.fire({
                title: 'Başarılı',
                text: 'Ekleme İşlemi Başarılı',
                icon: 'success',
                confirmButtonText: 'Kapat'
              })
            
        }else{

        }
      })
        

    }

  


    return (
        <>
            <div className='container'>
                <h6 className='display-6 my-2 text-center'>Kategori Ekle</h6>
                <hr />
                <div className='row'>
                    <div className='col-md-6'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label for="">Kategori Adı</Label>
                                <Input type='text' id='name' name='name' innerRef={register({ required: "Boş geçilemez" })} />
                                <div>
                                    
                                        <i style={{color:'red',fontSize:10}}>{errors.name?.message}</i>
                                    
                                </div>
                            </FormGroup>
                            <Row>
                                <Col>
                                    <div style={{ display: 'flex', justifyContent: "" }}>
                                        <div className='btn-group'>
                                        <Button className='btn-sm' type='submit' color='success'>Ekle +</Button>
                                        
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

export default AddCategory