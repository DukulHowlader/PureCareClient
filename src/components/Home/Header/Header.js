import React from 'react';
import TopNav from '../../Shared/TopNav/TopNav';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import HomeCarousel from '../Carousel/HomeCarousel';

const Header = () => {
    return (
        <>
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            <HomeCarousel></HomeCarousel>
        </>
    );
};

export default Header;