import { faChevronRight, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';
import './Contact.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import common from '../../../Images/common.jpg';
import Footer from '../../Shared/Footer/Footer';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_z4a3128', e.target, 'user_89jN937aRdcsCQdOHof7D')
          .then((result) => {
              swal("Message Send Successfully","","success");
          }, (error) => {
            swal("Message Send Failed!","","error");
          });
          e.target.reset();
      }
    
    return (
        <> 
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            <div className="pageNameShow">
                <img className="img-fluid" src={common} style={{opacity:'.2'}} alt="" />
                <div className="font-weight-bold centeredPos">Contact Us</div>
                <div className="font-weight-bold centeredPosition">Home <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon><span className='text-success'> Contact Us</span> </div>
            </div>
        
            <div className="contactPageLayout">
                <div className="left text-center">
                    <div className=" ml-auto  w-50 cardDesign shadow-sm rounded">
                        <div className="card-body">
                            <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkedAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                            <p className="card-text text-muted">120 west kafrul, Agargaon, Taltola, Dhaka-1207</p>
                        </div>
                    </div>
                    <div className=" ml-auto  w-50 cardDesign shadow-sm rounded">
                        <div className="card-body">
                            <h5 className="card-title"><FontAwesomeIcon icon={faPhoneAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Phone</h6>
                            <p className="card-text text-muted">+880 16489 04009</p>


                        </div>
                    </div>
                    <div className=" ml-auto mb-3 w-50 cardDesign shadow-sm rounded">
                        <div className="card-body">
                            <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkedAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email</h6>
                            <p className="card-text text-muted">purecarebd@ gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className="right  text-center">
                    <form className=' w-75 p-4 m-auto shadow rounded' onSubmit={sendEmail}>
                        <TextField className="w-75 my-4"  label="Name" type='text' name='name'  color="secondary" />
                        <br />
                        <TextField type="email" name='email' className="w-75 my-4"  label="Email" color="secondary" />
                        <br />
                        <TextField className="w-75 my-4"  label="Message" name='message' color="secondary" />
                        <br />
                        <Button type="submit" variant="contained" color="secondary">SEND</Button>
                    </form>
                </div>
            </div>
            <Footer></Footer>


        </>
    );
};

export default Contact;