import React from 'react'
import { Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
    return (
        <>
            <hr />
            <div className='container'>
                <div className='text-center alert alert-info'>Yönetim Paneli</div>
                <div className='row'>
                    <div className='col-md-2'>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <a className='text-info' style={{textDecoration:'none'}} href='/'>Ürünler Listesi</a>
                            </li>
                            <li className='list-group-item'>
                                <a className='text-info' style={{textDecoration:'none'}} href='/'>Kategoriler Listesi</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className='col-md-10'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home