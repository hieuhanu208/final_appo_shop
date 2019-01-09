import React, { Component } from 'react'
import ProductListing from '../feartures/product-listing'



export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home Page </h2>
        <ProductListing/>
      </div>
    )
  }
}
