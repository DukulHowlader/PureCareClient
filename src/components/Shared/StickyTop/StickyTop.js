import React from 'react';
import './StickyTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Navbar, Nav, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';


const StickyTop = (props) => {
    const [categories, setCategories] = useState([]);
    const details = localStorage.getItem('addedProducts');
    const addedProduct = JSON.parse(details)
        
    

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <header className="sticky" id="navbar">
            <style type="text/css">
                {`
                .btn-flat {
                background-color: rgb(113, 186, 88);
                color: white;
                }
                .btn-flat:hover {
                    background-color: rgb(113, 186, 88);
                    color: white;
                    } 
                `}
            </style>
            <div className="d-flex flex-container justify-content-between mt-4" >
                <div className=" flex-item-left">
                    <Link className="navbar-brand" to="/home">
                        <h1 className="headerTextStyle ">PURE CARE BD</h1>
                    </Link>
                </div>
                <div className="flex-item-middle mt-3">
                    <div className="input-group"> <input type="text" className="form-control input-text" placeholder="Search for Products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append"> <button className="btn btn-outline-success" type="button"><FontAwesomeIcon icon={faSearch} /></button></div>
                    </div>
                </div>
                <div className="flex-item-right btnPosition">
                   <Link to="/checkOut"> <button className="btnPositionStyle shadow btn2 "> <ShoppingCartOutlinedIcon /> CART : ({addedProduct?.length || 0}) ITEMS</button></Link>
                </div>
            </div>
            <Navbar data-spy="affix" data-offset-top="197" className="border" expand="lg">
                <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">

                        {categories.map(category => <DropdownButton
                            variant="flat"
                            title={category.category}
                            className="mt-2 stickyMenuDesign"
                            key={category._id}
                        >
                            {
                                (category.subCategories).map(subCategory =>
                                    <Dropdown.Item as={Link} to={`/category/${subCategory}`} className="stickySubMenuDesign" key={subCategory}>{subCategory}</Dropdown.Item>)
                            }

                        </DropdownButton>)
                        }





                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default StickyTop;