import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import SideMenu from '../../Shared/SideMenu/SideMenu';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';
import { Icon } from '@iconify/react';
import './Category.css';

const Category = () => {
    const { subName } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://immense-cliffs-46216.herokuapp.com/category/${subName}`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [subName])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            <div className="subCategoryProducts">
                <div className="CategoryMenu">
                    <SideMenu></SideMenu>
                </div>
                <div className="CategoryProduct">
                    {products.map(product =>
                        <div key={product._id} className="productViewDesign shadow mt-4">
                            <Link className='sideMenuLink' to={`/product/${product._id}`}>
                                <div className="imgBx">
                                    <img src={product.ProductImage} alt="" />
                                </div>
                                <div className="contentBx">
                                    <h5>{product.ProductName}</h5>
                                    <br />
                                    <h6 className=" px-3 py-1 rounded bg-success text-light"><Icon className="h5" icon="mdi:currency-bdt"/>{product.ProductPrice}</h6>
                                </div>
                            </Link>
                        </div>

                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Category;