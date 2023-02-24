import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='MacBook Pro' />
        </ul>

        <button>
          <ClearCartIcon />
        </button>

      </aside>

    </>
  )
}
