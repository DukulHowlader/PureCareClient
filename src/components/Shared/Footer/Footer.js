import { faFacebook, faGoogle, faInstagram, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faChevronRight, faEnvelope, faInfo, faMailBulk, faMapMarkedAlt, faMapPin, faPhoneAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className="footerChild">
                    <section className="upperSection">
                        <div className="py-5 px-3">
                            <h5 className="mb-5"><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faUserAlt} /> ABOUT PURE CARE BD</h5>
                            <p>Truly wonder of the worlds, where you will get pure, natural and genuine products from every corner of the world available at your doorstep in just a click.</p>
                            <div className="mt-5">
                                <FontAwesomeIcon className="mx-2" icon={faFacebook} />
                                <FontAwesomeIcon className="mx-2" icon={faGoogle} />
                                <FontAwesomeIcon className="mx-2" icon={faInstagram} />
                            </div>
                        </div>
                        <div className="py-5 px-3">
                            <h5 className="mb-5"><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faMapMarkedAlt} /> OUR LOCATION</h5>
                            <p><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faMapPin} /> West Kafrul, Agargaon, Taltola, Dhaka-1207, Bangladesh</p>
                        </div>
                        <div className="py-5 px-3">
                            <h5 className="mb-5"><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faAddressBook} /> Contact Us</h5>
                            <p><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faPhoneAlt} />+880-1648904009</p>
                            <p><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faEnvelope} />purecarebd@gmail.com</p>
                        </div>
                        <div className="py-5 px-3">
                            <h5 className="mb-5"><FontAwesomeIcon className="mr-2" style={{ color: 'rgb(113, 186, 88)' }} icon={faInfo} /> Information</h5>
                            <p><Link to="/about" style={{color:"white"}}><FontAwesomeIcon className="mr-2" style={{ color: '#F1B514' }} icon={faChevronRight} />About Us</Link></p>
                            <p><Link to="/contact" style={{color:"white"}}><FontAwesomeIcon className="mr-2" style={{ color: '#F1B514' }} icon={faChevronRight} />Contact Us</Link></p>
                            <p><Link to="#" style={{color:"white"}}><FontAwesomeIcon className="mr-2" style={{ color: '#F1B514' }} icon={faChevronRight} />Privacy & Policy </Link></p>
                            <p><Link to="#" style={{color:"white"}}><FontAwesomeIcon className="mr-2" style={{ color: '#F1B514' }} icon={faChevronRight} />Terms & Conditions</Link></p>
                        </div>
                    </section>
                    <section className="lowerSection">
                       <p style={{color:'gray'}} className="">© Copyright 2017 by <span style={{color:'rgb(113, 186, 88)'}}>Pure Care BD</span> </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Footer;