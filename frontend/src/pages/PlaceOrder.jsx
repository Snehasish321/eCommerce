import React from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-1 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px]'>
        <div className='text-xl sm:text-3xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Post office' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='PIN Code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone no.' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Alternative Phone no.' />
      </div> 
      
      {/* Right Side */}
      <div className=' text-xl min-w-80'>
        <CartTotal />
      </div>
      <div className='text-xl '>
        <Title text1={'PAYMENT'} text2={'METHOD'} />
      </div>
    </div>
  );
};

export default PlaceOrder;
