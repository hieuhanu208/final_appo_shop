
const data = JSON.parse(localStorage.getItem('CART'))

var initialState = data || []
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)


const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]
  


const addToCart = (cart , item) => {
    const cartItem = itemInCart(cart,item)
    return cartItem === undefined
     ? [...cartWithoutItem(cart,item), {...item,quantity: 1}] 
      : [...cartWithoutItem(cart,item), {...cartItem, quantity: cartItem.quantity + 1}]
}



const removeFromCart = (cart , item) => {
    return item.quantity === 1 ?[...cartWithoutItem(cart,item)] : [...cartWithoutItem(cart,item), {...item,quantity:item.quantity -1}]
}
const removeAllFromCart = (cart , item) => {
    return [...cartWithoutItem(cart,item)]
}

const cartReducer = (state = initialState ,action) => {
 switch (action.type) {
   case 'ADD':
    localStorage.setItem('CART', JSON.stringify(state))
    return addToCart(state,action.payload)
   
     
 
   case 'REMOVE':
   localStorage.setItem('CART', JSON.stringify(state))
   return removeFromCart(state,action.payload)
   
  

   case 'REMOVE_ALL':
   localStorage.setItem('CART', JSON.stringify(state))
   return removeAllFromCart(state,action.payload)
  
  

   default:
   return state;
 }
}

export default cartReducer;