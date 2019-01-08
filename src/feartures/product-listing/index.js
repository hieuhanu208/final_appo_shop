import React  from 'react'
import ProductListItem from './product-list-item'

import {connect} from 'react-redux'
import {cartItemWithQuantites} from '../cart'


 function ProductListing (props) {
  
    return (
      <div>
       {
         props.products.map( product => 
           <ProductListItem product={product} addToCart={props.addToCart} cart= {cartItemWithQuantites(props.cart)} />
         )
         
       }
      </div>
    )
  
}

 const mapStateToProps = (state) => {
  return {
    cart: state.cart 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({type:'ADD',payload:item})
    },
    removeFromCart: (item) => {
      dispatch({type:'REMOVE',payload:item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
