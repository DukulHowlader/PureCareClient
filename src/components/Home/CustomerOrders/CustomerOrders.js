import { Icon } from '@iconify/react';
import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import StickyTop from '../../Shared/StickyTop/StickyTop';
import TopNav from '../../Shared/TopNav/TopNav';

const CustomerOrders = () => {
    const [loggedInUser] = useContext(userContext);
    const [ordersView, setOrdersView] = useState([])
    const id = loggedInUser.CustomerEmail;

    fetch(`https://immense-cliffs-46216.herokuapp.com/customerOrder/${id}`)
        .then(response => response.json())
        .then(data => {
            setOrdersView(data)
        })

    return (
        <>
            <TopNav></TopNav>
            <StickyTop></StickyTop>
            {ordersView?.map((order, index) =>
                <div key={index} className="card container my-5">
                    <div className="card-header">
                        <h3 className="text-success"> Order No. {index + 1}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text"><strong>Customer Name:</strong> {order.CustomerName}</p>
                        <p className="card-text"><strong>Customer Contact:</strong> {order.CustomerContact}</p>
                        <p className="card-text"><strong>Customer Contact:</strong> {order.CustomerAddress}</p>
                        <table className="table mt-5 ">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.products?.map((product, index) =>

                                <tr key={index}>
                                    <td>{product.ProductName}</td>
                                    <td>{product.ProductQuantity}</td>
                                    <td>{product.ProductPrice * product.ProductQuantity}<Icon className="h5" icon="mdi:currency-bdt" /></td>
                                </tr>

                            )
                            }
                            <tr>
                                <td></td>
                                <td><strong>Delivery Charge :</strong></td>
                                <td><strong>{order.deliveryCharge}<Icon className="h5" icon="mdi:currency-bdt" /></strong></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Discount :</strong></td>
                                <td><strong>{order.discount}<Icon className="h5" icon="mdi:currency-bdt" /></strong></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Total :</strong></td>
                                <td><strong>{
                                    order.products?.reduce((total, product) => total + (parseInt(product.ProductPrice) * (product.ProductQuantity)), parseInt(order.deliveryCharge))
                                    
                                    }<Icon className="h5" icon="mdi:currency-bdt" /></strong></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomerOrders;