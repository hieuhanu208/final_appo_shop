import React from 'react'
import {Switch , Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import CheckoutPage from './pages/checkoutpage';

const Router = () =>{
  return (
    <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/cart" exact component={CartPage} />
    <Route path="/checkout" exact component={CheckoutPage} />
    </Switch>
  )
 
}

export default Router;

