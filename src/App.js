import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from "./components/Home/Login/Login";
import Contact from "./components/Home/Contact/Contact";
import About from "./components/Home/About/About";
import Category from "./components/Home/Category/Category";
import Product from "./components/Home/Product/Product";
import Profile from "./components/Shared/Profile/Profile";
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import ProceedCheckOut from "./components/Home/ProceedCheckOut/ProceedCheckOut";
import CustomerOrders from "./components/Home/CustomerOrders/CustomerOrders";


export const userContext = createContext();
function getLocalStorage(key) {
  const stored = localStorage.getItem(key);
  return JSON.parse(stored);
}
function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    getLocalStorage('loggedInUser')
  )
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="/category/:subName">
            <Category></Category>
          </Route>
          <Route path="/product/:id">
            <Product></Product>
          </Route>
          <PrivateRoute path="/customerOrders">
            <CustomerOrders></CustomerOrders>
          </PrivateRoute>
          <PrivateRoute path="/checkOut">
            <ProceedCheckOut></ProceedCheckOut>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <Route path="*">

          </Route>

        </Switch>
      </Router>
    </userContext.Provider>

  );
}

export default App;
