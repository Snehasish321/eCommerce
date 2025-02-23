import React from 'react'
import Title from '../components/Title'

const PlaceOrder = () => {
  return (
    <div className='flrx flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px] '>
        <div className='text-xl sm:text-3xl my-1'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
        </div>
        <div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Addresss'/>
        </div>
        <div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Post office'/>
        </div>    
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='PIN Code'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone no.'/>
        </div>
        <div className='flex gap-3'>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Alternative Phone no.'/>
        </div> 
      </div>      
    </div>
  )
}

export default PlaceOrder
