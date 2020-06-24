import React, { useState } from 'react';
import {FaChevronDown, FaBars} from "react-icons/fa";
import { AiOutlineSetting,AiOutlineLogout,AiOutlineBell } from 'react-icons/ai'
import { Navbar,NavDropdown,Dropdown } from 'react-bootstrap';


const Header = ({expanded, toggle}) => {
    return ( 
          <Navbar expand="md" className={`navbar ${(expanded)?'navbar-expanded':''}`}>
            <div className={`bars ${(expanded)?'hide':''}`} onClick={()=>toggle()}> <FaBars size={30} /> </div>
            <Navbar.Brand href="/" className="brand-wrapper">
              <img src={require('assets/images/logo.png')} className="brand-logo" alt="logo" />
            </Navbar.Brand>
            <div className="my-account">
              <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: 'transparent',borderColor: 'transparent',boxShadow: 'none'}}>
                  My Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#action/3.2"><AiOutlineSetting size={20}/> Settings</Dropdown.Item>
                <Dropdown.Item href="#action/3.3"><AiOutlineBell size={20}/> Notifications <span className="ml-auto badge badge-warning">2</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4"><AiOutlineLogout size={20}/> Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar>
     );
}
 
export default Header;