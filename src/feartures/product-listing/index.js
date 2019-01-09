import React  from 'react'
import ProductListItem from './product-list-item'
import {connect} from 'react-redux'
import fetchApi from '../../modules/fetch-api'



 class ProductListing extends React.Component {
   componentDidMount() {
    fetchApi('get', "https://student-example-api.herokuapp.com/v1/products.json")
    .then((json => this.props.loadProducts(json)))
   }
  
    render(){
      const { addToCart, removeFromCart, products, cart } = this.props;

      return (
        <div className='product-listing'>
         {
           products.map( product => 
             <ProductListItem product={product} addToCart={addToCart} 
             cartItem= {cart.filter(cartItem => cartItem.id === product.id)[0]}
              removeFromCart = {removeFromCart} />
           )
           
         }
        </div>
      )
    }
  
}

 const mapStateToProps = (state) => {
  return {
    cart: state.cart ,
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: (products) => {
      dispatch({type:'LOAD',payload:products})
    },

    addToCart: (item) => {
      dispatch({type:'ADD',payload:item})
    },
    removeFromCart: (item) => {
      dispatch({type:'REMOVE',payload:item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
