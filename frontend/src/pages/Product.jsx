import React, { useContext, useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products , currency , addToCart } = useContext(ShopContext);
  const [ productData , setProductData ] = useState(false);
  const [ image , setImage ] = useState('') 
  const [ size , setSize ] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null ;
      }
    })
    
  }

  useEffect(() => {
    fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duartion-500 opacity-100'>
      { /* Product ka kalachittha */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        { /* Product ka photus */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto ' src={image} alt="" />

          </div>
        </div>
        { /* Product ka detail */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-2 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(69)</p>
            </div>
            <p className='mt-5 text-3xl font-bold mt-2'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-700 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item,index) => (
                    <button onClick={()=>setSize(item)} key={index} className={`border p-2 w-12 text-center bg-gray-100 ${item === size ? 'border-orange-600' : ''} `}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% asli maal hai</p>
                    <p>Paisa feko tamasha dekho</p>
                    <p>Return karo ya Exchange , dono hi 7 din ke andar asani se hota hai</p>
                </div>
        </div>
      </div>
      
          { /* Product ka gyan aur asli review */}
            <div className='mt-10'>
                <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews(69)</p>
                </div>
                <div className='mt-5'>
                  <p className='text-gray-700'>{productData.description}</p>
                  </div>
                  <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora ipsam dolorem itaque eos! Velit, doloribus ea, fugit quisquam in itaque aliquam quibusdam quas aperiam laborum blanditiis molestias incidunt quae?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aspernatur iusto pariatur itaque totam. Provident eius iure error tenetur deleniti ratione, eligendi, placeat, iusto nulla distinctio aperiam itaque at earum?</p>
                  </div>
            </div>
            { /* Related products dikhaye ji*/}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product
