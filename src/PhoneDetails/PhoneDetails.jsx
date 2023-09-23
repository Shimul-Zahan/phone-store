import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { saveToLCS } from '../Utils/LocalStorage';

const PhoneDetails = () => {

    const phones = useLoaderData();
    const { id } = useParams();
    const { image, phone_name, brand_name, price, rating } = phones;


    const phone = phones.filter(phoneid => phoneid.id == id);
    // console.log(phone)

    const addTolocalStorage = () => {
        saveToLCS(phone);
    }

  return (
      <div className='w-full flex justify-center items-center'>
          <div className="card w-96 bg-base-100 shadow-xl border-2">
              <figure>
                  <img src={phone[0].image} alt="Shoes" className='h-[350px] w-full' />
              </figure>
              <div className="card-body">
                  <div className='text-xl space-y-3'>
                      <h1>{phone[0].rating}</h1>
                      <p>{brand_name}</p>
                      <div className='flex justify-between items-center w-full'>
                          <p>{phone[0].phone_name}</p>
                          <p>{phone[0].price}$</p>
                      </div>
                  </div>
                  <div className="mt-3">
                      <Link>
                          <button onClick={addTolocalStorage} className="btn btn-primary w-full">Add to Cart</button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default PhoneDetails