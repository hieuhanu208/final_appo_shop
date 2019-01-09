import React, { Component } from 'react';
import Router from './Router'
import {Link ,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const Navigation = ({cart}) => (
  <nav>
        <ul className="top-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart/">Cart({ cart.reduce((acc,item) => {
              return acc + item.quantity
            },0)})</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li> 
        </ul>
      </nav>

)
class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigation {...this.props} />

        <Router/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

export default withRouter (connect(mapStateToProps, null)(App))
