import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductShow.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ProductShow = () => {
    const [firstProductsDetails, setFirstProductsDetails] = useState([]);
    const [secondProductsDetails, setSecondProductsDetails] = useState([]);
    const [thirdProductsDetails, setThirdProductsDetails] = useState([]);

    const First = 'Beauty';
    const Second = 'Butter & Others';
    const Third = 'Oils';

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${First}`)
            .then(response => response.json())
            .then(data => setFirstProductsDetails(data))
    }, [First])

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${Second}`)
            .then(response => response.json())
            .then(data => setSecondProductsDetails(data))
    }, [Second])

    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/products/${Third}`)
            .then(response => response.json())
            .then(data => setThirdProductsDetails(data))
    }, [Third])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <>

            <h1 className="text-center bg-light p-2 shadow-sm mt-5">Beauty Products</h1>
            <Carousel className="ml-5 mt-5" style={{ backgroundColor: 'gray' }} responsive={responsive}>
                {firstProductsDetails.map(productDetails =>
                    <div key={productDetails._id} className="productCardDesign">
                        <div className="productImgStyle">
                        <Link to={`/product/${productDetails._id}`}><img className="img-fluid" src={productDetails.ProductImage} alt="" /></Link>
                        </div>
                        <div className="card-body text-center mt-5">
                            <Link to={`/product/${productDetails._id}`} className="h5 productNameDesign">{productDetails.ProductName}</Link>
                            
                            <p className="productPriceDesign px-2">{productDetails.ProductPrice} /-</p>
                        </div>
                    </div>
                )}
            </Carousel>

            <h1 className="text-center bg-light p-2 shadow-sm mt-5">Oils</h1>
            <Carousel className="ml-5 mt-5" style={{ backgroundColor: 'gray' }} responsive={responsive}>
                {thirdProductsDetails.map(productDetails =>
                    <div key={productDetails._id} className="productCardDesign">
                        <div className="productImgStyle">
                        <Link to={`/product/${productDetails._id}`}><img className="img-fluid" src={productDetails.ProductImage} alt="" /></Link>
                        </div>
                        <div className="card-body text-center mt-5">
                            <Link to={`/product/${productDetails._id}`} className="h5 productNameDesign">{productDetails.ProductName}</Link>
                            
                            <p className="productPriceDesign px-2">{productDetails.ProductPrice} /-</p>
                        </div>
                    </div>
                )}
            </Carousel>

            <h1 className="text-center bg-light p-2 shadow-sm mt-5">Butters & Other Products</h1>
            <Carousel className="ml-5 mt-5" style={{ backgroundColor: 'gray' }} responsive={responsive}>
                {secondProductsDetails.map(productDetails =>
                    <div key={productDetails._id} className="productCardDesign">
                        <div className="productImgStyle">
                        <Link to={`/product/${productDetails._id}`}><img className="img-fluid" src={productDetails.ProductImage} alt="" /></Link>
                        </div>
                        <div className="card-body text-center mt-5">
                            <Link to={`/product/${productDetails._id}`} className="h5 productNameDesign">{productDetails.ProductName}</Link>
                            
                            <p className="productPriceDesign px-2">{productDetails.ProductPrice} /-</p>
                        </div>
                    </div>
                )}
            </Carousel>


        </>
    );
};

export default ProductShow;