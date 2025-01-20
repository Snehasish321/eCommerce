import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>   
        <p className='text-gray-400 mt-3 '>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus beatae fugit, hic odio ducimus tempore incidunt.    
        </p>   
        <form 
  className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
  onSubmit={(e) => e.preventDefault()} // Prevent form submission for testing
>
  <input
    className="w-full sm:flex-1 outline-none p-2"
    type="email"
    placeholder="Enter your email"
    required
    aria-label="Email Address" // Accessibility improvement
  />
  <button
    type="submit"
    className="bg-black text-white text-xs px-5 py-2 sm:px-10 sm:py-3"
  >
    SUBSCRIBE
  </button>
</form>

    </div>
  )
}

export default NewsletterBox
