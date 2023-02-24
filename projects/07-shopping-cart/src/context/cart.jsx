import { createContext, useState } from 'react'

// 1. Crear el Contexto
// Este es el que tenemos que consumir
export const CartContext = createContext()

// 2. Crear el Provider
// Este es el que nos provee acceso al contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {}
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
