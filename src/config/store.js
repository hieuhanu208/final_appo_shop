import {createStore, combineReducers} from 'redux'
import cartReducer from '../feartures/cart/reducer'
import productsReducer from '../feartures/product-listing/reducer'


const rootReducer = combineReducers({
 cart: cartReducer,
 products:productsReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
