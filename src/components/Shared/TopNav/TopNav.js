import React, { useContext} from 'react';
import './TopNav.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { userContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

const TopNav = () => {
    const [loggedInUser] = useContext(userContext);
    const logOutHandle = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload(false)
    }
    return (
        <>
        <Navbar className="topNavBg" expand="lg" >
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="px-3 topNavLink" style={{color:'White'}} href="/home">Home</Nav.Link>
                    <Nav.Link className="px-3 topNavLink" style={{color:'White'}} href="/about">About Us</Nav.Link>
                    <Nav.Link className="px-3 topNavLink" style={{color:'White'}} href="/contact">Contact Us</Nav.Link>
                    {loggedInUser?.loginInfo ==='true' ?
                    <NavDropdown className=" topNavLink" title={loggedInUser.CustomerName} id="basic-nav-dropdown">
                    <NavDropdown.Item href='/profile'  style={{color: 'gray'}}><FontAwesomeIcon icon={faUser} /> Profile</NavDropdown.Item>
                    <NavDropdown.Item href='/customerOrders'  style={{color: 'gray'}}><FontAwesomeIcon icon={faListAlt} /> Orders</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item onClick={logOutHandle}  style={{color: 'gray'}}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavDropdown.Item>
                  </NavDropdown>
                    : <Nav.Link className="px-3 topNavLink" style={{color:'White'}} href="/login">Registration/Login</Nav.Link>
                    
                    }
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        </>
    );
};
export default TopNav;