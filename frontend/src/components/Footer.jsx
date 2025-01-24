import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate ex cumque expedita dolor quo explicabo commodi! Tempore accusantium reiciendis fugit quasi, consequuntur asperiores, amet ut ad facere a nesciunt.
        </p>
      </div>
    </div>
  )
}

export default Footer

