import React from 'react'
import { Link } from 'react-router-dom'

const CartPhn = ({phn}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2">
      <figure>
        <img src={phn[0].image} alt="Shoes" className='h-[350px] w-full' />
      </figure>
      <div className="card-body">
        <div className='text-xl space-y-3'>
          <h1>{phn[0].rating}</h1>
          <p>{phn[0].brand_name}</p>
          <div className='flex justify-between items-center w-full'>
            <p>{phn[0].phone_name}</p>
            <p>{phn[0].price}$</p>
          </div>
        </div>
        <div className="mt-3">
          <Link to='/'>
            <button className="btn btn-primary w-full">Back to home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPhn