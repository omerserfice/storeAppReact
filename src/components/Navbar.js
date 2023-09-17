import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {

    return (
        <>
            <div>

                <Nav>
                    <div className="d-flex">
                        <div className='p-2'>
                            <NavItem>
                                <NavLink className='text-info' href="/" disabled>StoreApp</NavLink>
                            </NavItem>
                        </div>
                        <div className='p-2'>
                            <NavItem>
                                <NavLink className='text-info' href="/product" active>Ürünler</NavLink>
                            </NavItem>
                        </div>
                        <div className='p-2'>
                            <NavItem>
                                <NavLink className='text-info' href="/category" active>Kategori</NavLink>
                            </NavItem>
                        </div>
                      
                        <div className='ml-auto p-2'>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className='text-primary' nav caret>
                                       Yönetim Paneli
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    <NavLink className='text-primary' href="/admin/product" active>Ürünler Listesi</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <NavLink className='text-primary' href="/admin/category" active>Kategori Listesi</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>

                    </div>

                </Nav>

            </div >
        </>
    )
}

export default Navbar