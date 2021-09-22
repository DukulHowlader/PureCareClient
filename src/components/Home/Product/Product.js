import { faCartPlus, faCheckCircle, faExclamationCircle, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [disable, setDisable] = useState(false);
    const [addedProduct, setAddedProduct] = useState({});

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/product/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data[0])
            })
    }, [id]);

    const handleAddProduct = () => {
        const quantity = document.getElementById('quantity');
        product.ProductQuantity = quantity.value;
        let existingEntries = JSON.parse(localStorage.getItem("addedProducts"));
        if (existingEntries == null) existingEntries = [];
        localStorage.setItem("added", JSON.stringify(product));
        existingEntries.push(product);
        localStorage.setItem("addedProducts", JSON.stringify(existingEntries));
        setDisable(true);

    }


    return (
        <>
            <TopNav></TopNav>
            <StickyTop addedProduct={addedProduct}></StickyTop>

            <div className="productViewContainer">
                <div className="productImageContainer">
                    <img className="img-fluid" src={product.ProductImage} alt="" />
                </div>
                <div className="productDetailsContainer">
                    <h3>{product.ProductName}</h3>
                    <p>
                        <span className="px-2">Available:
                            {product.ProductAvailability === "YES" ?
                                <span className="px-1" style={{ color: '#6fc191' }}> <FontAwesomeIcon icon={faCheckCircle} /> In Stock</span> :
                                <span className="px-1" style={{ color: '#DC0F34' }}> <FontAwesomeIcon icon={faExclamationCircle} /> Stock Out</span>}
                        </span>
                        <span className="px-2" > | </span>
                        <span className="px-2">
                            <FontAwesomeIcon icon={faTruckLoading} /> Delivery Charge Applicable
                        </span>
                    </p>
                    <h2 className="pb-3" style={{ borderBottom: 'dashed 1px lightgray' }}><Icon className="h3" icon="mdi:currency-bdt" /> {product.ProductPrice}</h2>

                    <form className="mt-3">
                        <label htmlFor="available">Available In:</label>
                        <br />
                        <select className="bg-light" style={{ border: 'solid 1px lightgray' }} name="" id="available">
                            <option value="">{product.ProductName} @ BDT.{product.ProductPrice}</option>
                        </select>

                        <p className="mt-3">
                            <span className="bg-light py-2 col-md-1">QTY </span>
                            <input className="bg-light border py-1 mx-2" type="number" name="quantity" id="quantity" min="1" defaultValue={1 || ''} required />
                        </p>

                        {product.ProductAvailability === "YES" ?

                            <div className="mt-4">
                                <button className="addCartBtn" onClick={handleAddProduct} disabled={disable} ><small><FontAwesomeIcon icon={faCartPlus} /> ADD TO CART</small></button>
                            </div>
                            : ""
                        }
                        <div className="mt-5" style={{ borderTop: 'dashed 1px lightgray' }}>
                            <div className="mt-4">
                                <h4>Description:</h4>
                                <p>{product.ProductDetails}</p>
                            </div>
                            <div className="mt-5">
                                <h4>Additional Description:</h4>
                                <h5 style={{ color: 'coral' }}>Use Process:</h5>
                                <p>{product.ProductUsage}</p>
                            </div>
                        </div>
                    </form>

                    <div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Product;