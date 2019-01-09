import React from 'react'
import { connect } from 'react-redux'
import Cart from '../cart'

function Checkout (props) {
  const {cart} = props
  return <div>
  <div style={{border:'1px solid black ' }}>
  <Cart/>
  </div>
  
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  null
)(Checkout)
