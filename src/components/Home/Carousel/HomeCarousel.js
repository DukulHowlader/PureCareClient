import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from '../../../Images/1.jpg';
const HomeCarousel = () => {
    return (
       
            <div className="m-auto carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img className="w-100"  src={one} alt="" />
                </div>
            </Carousel>
        </div>
       
    );
};

export default HomeCarousel;