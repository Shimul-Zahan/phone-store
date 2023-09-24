import React, { useEffect, useState } from 'react'
import { searchItem } from '../Utils/LocalStorage'
import CartPhn from './CartPhn';

const Cart = () => {

  const [phone, setPhone] = useState([]);
  const [displayPhones, setDisplayPhones] = useState([]);

  useEffect(() => {
    const cartItem = searchItem();
    setPhone(cartItem)
    setDisplayPhones(cartItem)
  }, [])

  // ! here filter method work;

  const displayAll = () => {
    setDisplayPhones(phone)
  }
  const displayApple = () => {
    const apple = phone.filter(phn => phn[0].brand_name === 'Apple');
    setDisplayPhones(apple)
  }
  const displaySamsung = () => {
    const samsung = phone.filter(phn => phn[0].brand_name === 'Samsung');
    setDisplayPhones(samsung)
  }
  const displayXiaomi = () => {
    const xiaomi = phone.filter(phn => phn[0].brand_name === 'Xiaomi');
    setDisplayPhones(xiaomi)
  }




  return (
    <div>
      <div className='text-center mb-10'>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">Filter cart item</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-4 text-xl text-yellow-500">
            <button onClick={displayAll}><a>All</a></button>
            <button onClick={displayApple}><a>Apple</a></button>
            <button onClick={displaySamsung}><a>Samsung</a></button>
            <button onClick={displayXiaomi}><a>Xiaomi</a></button>
            
          </ul>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {
          displayPhones.map(phn => <CartPhn key={phn[0].id} phn={phn}></CartPhn>)
        }
      </div>
    </div>
  )
}

export default Cart