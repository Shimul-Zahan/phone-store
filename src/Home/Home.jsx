import React, { useEffect, useState } from 'react'
import Phone from './Phone';

const Home = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('/phones.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {
              phones.map(phone=> <Phone key={phone.id} phone={phone} />)
          }
      </div>
  )
}

export default Home