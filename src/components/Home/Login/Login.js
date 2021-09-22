import React, { useContext, useState, useEffect } from 'react';
import loginImg from '../../../Images/login.jpg';
import './Login.css';
import { Link } from "react-router-dom";
import TopNav from '../../Shared/TopNav/TopNav';
import Footer from '../../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { userContext } from '../../../App';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let {form} = location.sate || {form : {pathname:"/"}};

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const CustomerData = {
            CustomerName: data.CustomerName,
            CustomerEmail: data.CustomerEmail,
            CustomerContact: null,
            CustomerAddress: null,
            CustomerPass: data.CustomerPassword,

        }
        fetch('https://immense-cliffs-46216.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(CustomerData)
        })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    swal({
                        title: "Registration", text: "Successful!", icon:
                            "success"
                    }).then(function () {
                        window.location.reload(false);
                    })

                }

                else if (data[0] === 'invalid') {
                    swal({
                        title: "Failed", text: "Invalid Email Address", icon:
                            "error"
                    })

                    history.push('/login')
                }

                else {
                    swal({
                        title: "Failed", text: "Email already exist", icon:
                            "error"
                    })
                    history.push('/login')
                }
            })
    };

    const getConfirmPassword = (e) => {
        const confirmPass = e.target.value;
        const customerPass = document.getElementById('CustomerPassword').value;
        if (customerPass !== confirmPass) {
            document.getElementById('errorDisplay').style.display = 'block';
            document.getElementById('successDisplay').style.display = 'none';
        }
        else {
            document.getElementById('errorDisplay').style.display = 'none';
            document.getElementById('successDisplay').style.display = 'block';
        }
    }

    const handleLogin = () => {
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPass').value;
        const loginData = {
            loginEmail: loginEmail,
            loginPassword: loginPassword
        }
        fetch('https://immense-cliffs-46216.herokuapp.com/loginUser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.loginInfo === 'true') {
                    setLoggedInUser(data);
                    history.replace(form);
                }
                else {
                    swal({
                        title: "Failed", text: "Check email or password", icon:
                            "error"
                    })
                    history.push('/login')
                }
            })
    }

    useEffect(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      }, [loggedInUser]);
     
      useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <TopNav></TopNav>
            <div className='container loginDisplayMain'>
                <div className="shadow loginDisplay">

                    <div className="leftHandBox ">
                        <h3 className="mb-5">{newUser ? "REGISTRATION" : "LOGIN"}</h3>
                        {!newUser && <form className="w-75" action="">

                            <div className="form-group">
                                <input type="email" id="loginEmail" className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" id="loginPass" className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <button type='button' onClick={handleLogin} className="btn mt-5" style={{ backgroundColor: 'rgb(113, 186, 88)', color: 'white' }}>Login</button>
                        </form>}



                        {newUser && <form className="w-75" id="resetForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" {...register("CustomerName")} className="form-control" placeholder="Full Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" {...register("CustomerEmail")} className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <input type="password" id="CustomerPassword" {...register("CustomerPassword")} className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={getConfirmPassword} className="form-control" placeholder="Confirm Password" required />
                                <span id="errorDisplay" style={{ color: 'red', display: 'none' }}>password not matched</span>
                                <span id="successDisplay" style={{ color: 'green', display: 'none' }}>password matched</span>
                            </div>
                            <button type="submit" className="btn mt-5" style={{ backgroundColor: 'rgb(113, 186, 88)', color: 'white' }}>Submit</button>
                        </form>}
                    </div>
                    <div className="rightHandBox ">
                        <img src={loginImg} alt="" />
                        <div className="text-center mt-4">
                            <p>{newUser ? "Already have an account? " : "Don't have an account?  "}<Link to="login" onClick={() => setNewUser(!newUser)}>{newUser ? "login" : "create one"}</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;