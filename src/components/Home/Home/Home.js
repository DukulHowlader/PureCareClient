import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import ProductShow from '../ProductShow/ProductShow';

const Home = () => {
    return (
        <div className="content-wrap">
            <Header></Header>
            <ProductShow></ProductShow>
            <Footer></Footer>
        </div>
    );
};

export default Home;