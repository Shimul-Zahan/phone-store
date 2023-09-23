import React, { useEffect, useState } from 'react'
import { searchItem } from '../Utils/LocalStorage'
import CartPhn from './CartPhn';

const Cart = () => {

  const [phone, setPhone] = useState();

  useEffect(() => {
    const cartItem = searchItem();
    setPhone(cartItem)
  }, [])

  

  return (
    <div>
      {/* {
        phone.map( phn=> console.log(phn))
      } */}
    </div>
  )
}

export default Cart