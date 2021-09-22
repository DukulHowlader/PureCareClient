import React, { useContext, useEffect, useState } from 'react';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';
import { userContext } from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import '../Login/Login.css'
import swal from 'sweetalert';

const ProceedCheckOut = () => {
    let i = 1;
    let history = useHistory();
    const [products, setProducts] = useState([]);
    const [loggedInUser] = useContext(userContext)
    const [deliveryCharge, setDeliveryCharge] = useState(60);
    const details = localStorage.getItem('addedProducts');

    const totalPrice = products?.reduce((total, product) => total + (parseInt(product.ProductPrice) * (product.ProductQuantity)), 0);
    const totalWithCharge = (totalPrice + parseInt(deliveryCharge));

    const getQuantity = (e, productIndex) => {
        const quantity = e.target.value;
        let existingEntries = JSON.parse(localStorage.getItem("addedProducts"));
        existingEntries[productIndex].ProductQuantity = quantity;
        localStorage.setItem("addedProducts", JSON.stringify(existingEntries));
        setProducts((JSON.parse(details)))

    }

    const removeItem = (productIndex) => {
        let existingEntries = JSON.parse(localStorage.getItem("addedProducts"));
        existingEntries.splice(productIndex, 1);
        localStorage.setItem("addedProducts", JSON.stringify(existingEntries));
        setProducts((JSON.parse(details)))
    }

    const getDeliveryCharge = (e) => {
        const deliveryCharge = e.target.value;
        setDeliveryCharge(deliveryCharge)
    }

    useEffect(() => {
        setProducts((JSON.parse(details)))

    }, [details]);

    const loadCustomerDetails = () => {
        if (products?.length > 0) {
            const CartItemSection = document.getElementById('CartItemSection');
            CartItemSection.style.display = 'none';
            const customerDetails = document.getElementById('customerDetails');
            customerDetails.style.display = 'block';
        }


    }
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const orderData = {
            CustomerName: loggedInUser.CustomerName,
            CustomerEmail: loggedInUser.CustomerEmail,
            CustomerContact: data.CustomerContact,
            CustomerAddress: data.CustomerAddress,
            CustomerPass: loggedInUser.CustomerPass,
            products: products,
            deliveryCharge: deliveryCharge,
            discount: 0,
            date: new Date().toLocaleString("en-US", { day: '2-digit', month: "2-digit", year: "2-digit" })

        }
        fetch('https://immense-cliffs-46216.herokuapp.com/createOrder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(data => {
                if (data === true) {
                    localStorage.removeItem('addedProducts')
                    swal({
                        title: "Order", text: "Placed Successful!", icon:
                            "success"
                    }).then(function () {
                        window.location = "home";
                    });

                }
                else {
                    swal({
                        title: "Failed", text: "", icon:
                            "error"
                    })
                    history.push('/createOrder')
                }
            })
    };

    return (

        <div>
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            <div className="mx-auto mt-5 w-75" id="CartItemSection">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) =>
                            <tr key={index}>
                                <th scope="row">{i++}</th>
                                <td>{product.ProductName}</td>
                                <td>{product.ProductPrice}</td>
                                <td className="w-25"><input min="1" type="number" defaultValue={product.ProductQuantity} onChange={(e) => getQuantity(e, index)} /></td>
                                <td>{product.ProductPrice * product.ProductQuantity}</td>
                                <td><button type="button" className="btn btn-sm btn-danger" onClick={() => removeItem(index)}><FontAwesomeIcon icon={faTimes} /></button></td>
                            </tr>)}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Sub-Total :</strong></td>
                            <td>{totalPrice}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Delivery Charge :</strong></td>
                            <td> <select className="form-control" onChange={getDeliveryCharge}>
                                <option value="60">Inside Dhaka 60tk</option>
                                <option value="100">Outside Dhaka 100tk</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total :</strong></td>
                            <td>{totalWithCharge || 0}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-right">
                    <button className="btn btn-success" onClick={loadCustomerDetails}>Proceed Order</button>
                </div>
            </div>
            <div className='loginDisplay mt-5' id="customerDetails" style={{ display: 'none' }}>
                <h4 className="text-dark mb-5 text-center">User Details</h4>
                <form className="w-50 mx-auto" id="resetForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.CustomerName} disabled className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="email" defaultValue={loggedInUser.CustomerEmail} disabled className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="number" defaultValue={loggedInUser.CustomerContact || ''} {...register("CustomerContact")} min='0' className="form-control" placeholder="Enter contact number" required />
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.CustomerAddress || ''} {...register("CustomerAddress")} className="form-control" placeholder="Enter address" required />
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-success">Place Order</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProceedCheckOut;