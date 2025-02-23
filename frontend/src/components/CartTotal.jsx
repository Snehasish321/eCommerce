import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-3xl mb-2'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>
      <div className='flex items-center justify-between text-sm border-t pt-3'>
        <p>SUBTOTAL</p>
        <p>{currency} {getCartAmount()}.00</p>
      </div>
      <div className='flex items-center justify-between text-sm'>
        <p>DELIVERY CHARGE</p>
        <p>{currency} {delivery_fee}.00</p>
      </div>
      <div className='flex items-center justify-between text-sm font-bold border-t pt-3'>
        <p>TOTAL</p>
        <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
      </div>
    </div>
  );
};

export default CartTotal;
