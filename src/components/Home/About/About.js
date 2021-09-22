import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';
import common from '../../../Images/common.jpg';
import Footer from '../../Shared/Footer/Footer';
import './About.css';

const About = () => {
    return (
        <div>
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            <div className="pageNameShow">
                <img className="img-fluid" src={common} style={{opacity:'.2'}} alt="" />
                <div className="font-weight-bold mb-5 centeredPos">About Us</div>
                <div className="font-weight-bold centeredPosition">Home <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon><span className='text-success'> About Us</span> </div>
               </div>
                  <section className="section bg-c-light border-bottom">
                 <div className="container">
                     <h5 className="main-heading">Our Company</h5> 
                     <div className="underline"></div>
                     <p className="aboutTextDesign">
                     PURE CARE BD is committed to being a trustworthy and innovative global leader by providing genuine True Wellness products. Our advanced processing methods and dehydration technologies ensure that our herbs retain their maximum level of potency for the highest quality, most effective, pure and natural True Wellness products available in the market today. Our success serves as living proof that shared abundance can be created with an uncompromising commitment to environmental and social responsibility.<br></br>
                     Sustainability in the near future will continue to priorities R&D investment to identify new formulations and processes that can replace existing materials and ingredients with sustainable alternatives. Pure Care BD is an online store where people can buy organic food supplements, organic skin care products and organic hair care products. Some of the products are imported and some of them are local grown. As people are now more conscious about their health, skin and hair so they would like to consume or use organic products as they are chemical free. Organic items are rare nowadays so we are making it available for a betterment of everyone.
                     </p>
                     </div>   
                  </section>  

                <section className="section bg-c-light border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                                <h3 className="main-heading">Vision,Mission and Values </h3>
                                <div className="underline mx-auto"></div>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>Our Vision</h6>
                                <p className="aboutTextDesign">To be a Vehicle of Consciousness in the global market by creating an holistic, sustainable business modality, which inspires, promotes and supports True Wellness and respect for all Beings and for Mother Nature.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>Our Mission</h6>
                                <p className="aboutTextDesign">To be a trustworthy and innovative global leader in providing genuine organic True Wellness products and solutions for conscious, healthy living.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>Our Core Values</h6>
                                <p className="aboutTextDesign">
                                    <ul>
                                    <li>Service to all</li>
                                    <li>Total integrity</li>
                                    <li>Absolute commitment to quality</li>
                                    <li>Respect and devotion to Mother Nature</li>
                                    <li>No compromise on being who we are</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    </section>     
            <Footer></Footer>
        </div>
    );
};

export default About;