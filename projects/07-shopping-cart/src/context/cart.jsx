import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart'

// 1. Crear el Contexto
// Este es el que tenemos que consumir
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

// 2. Crear el Provider
// Este es el que nos provee acceso al contexto
export function CartProvider ({ children }) {
  const { state, addToCart, clearCart, removeFromCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
