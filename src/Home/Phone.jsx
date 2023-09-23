import React from 'react'
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {

    const { id, image, phone_name, brand_name, price, rating } = phone;

  return (
      <div className="card w-96 bg-base-100 shadow-xl border-2">
          <figure>
              <img src={image} alt="Shoes" className='h-[350px] w-full' />
          </figure>
          <div className="card-body">
              <div className='text-xl space-y-3'>
                  <h1>{rating}</h1>
                  <p>{brand_name}</p>
                  <div className='flex justify-between items-center w-full'>
                      <p>{phone_name}</p>
                      <p>{ price }$</p>
                  </div>
              </div>
              <div className="mt-3">
                  <Link to={`/phone/${id}`}>
                      <button className="btn btn-primary w-full">Details</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Phone