import React from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

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
      <div className='mt-1'>

      <div className='mt-8 text-xl min-w-80'>
        <CartTotal />
      </div>
      <div className='text-xl mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'} />
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full `}>
              <img className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
            </p>
          </div>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full `}>
              <img className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
            </p>
          </div>
          <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
            <p className='text-gray-800 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
