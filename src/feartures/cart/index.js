import React  from 'react'
import {connect} from 'react-redux'

function sort(items) {
  return items.sort((a,b) => a.id < b.id)
}

function Cart(props) {
  return <table>
    <thead>
      <tr>
        <th>Items</th>
        <th>Quantity</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>${item.price*item.quantity}</td>
          <td><button onClick={(e) => props.addToCart(item)}>+</button></td>
          <td><button onClick={(e) => props.removeFromCart(item)}>-</button></td>
          <td><button onClick={(e) => props.removeAllFromCart(item)}>Remove all</button></td>
        </tr>)
      }
    </tbody>
    Total: ${parseFloat(showTotal(props.cart)).toFixed(2)}
  </table>
 
}

const showTotal = (cart ) => {
  var total = 0;
  if(cart.length >0) {
      for (let index = 0; index < cart.length; index++) {
          total += cart[index].price * cart[index].quantity
          
      }
  }
  return total;
}




const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch ) => {
  return {
    addToCart: (item) => {
      dispatch({type:'ADD', payload:item})
    },
    removeFromCart:(item) => {
      dispatch({type:'REMOVE', payload:item})
    },
    removeAllFromCart:(item) => {
      dispatch({type:'REMOVE_ALL', payload:item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


