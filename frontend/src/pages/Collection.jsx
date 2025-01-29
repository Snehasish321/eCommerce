import React, { useContext , useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products } = useContext( ShopContext );
  const [ showFilter , setShowFilter ] = useState( false );
  const [ filterProducts , setFilterProducts ] = useState( [] );
  

  useEffect(() => {
    setFilterProducts( products );
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter karlo goisss*/}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        { /*Category select karlo goisss*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden' } sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'}/> Kids
            </p>
          </div>
        </div>
        { /*SubCategory select karlo goisss*/ }
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' } sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'BottomWear'}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'}/> Winterwear 
            </p>
          </div>
        </div>
      </div>
      { /*Products dikhao goisss woh bhi right side pe */ }
      
      
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} /> 
          {/* Sort karlo goisss */}
          <select className='border-3 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        { /*Products dikhao goisss map ka help se*/}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'> 
          {
            filterProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
