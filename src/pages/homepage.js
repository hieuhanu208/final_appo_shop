import React, { Component } from 'react'
import ProductListing from '../feartures/product-listing'
import data from '../data/products.json'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home Page </h2>
        <ProductListing products={data.products}/>
      </div>
    )
  }
}
