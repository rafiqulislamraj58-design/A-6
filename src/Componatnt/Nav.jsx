import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between p-6 bg-zinc-50 shadow-lg'>
    <h2 className=' font-bold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>DigiTools</h2>
    
    <div className='flex  gap-4 left-2.5'>
        <p className='text-[#101727] font-bold hover:text-pink-500  cursor-pointer'>Products</p>
        <p className='text-[#101727] font-bold hover:text-pink-500  cursor-pointer'>Features</p>
        <p className='text-[#101727] font-bold hover:text-pink-500  cursor-pointer'>Pricing</p>
        <p className='text-[#101727] font-bold hover:text-pink-500  cursor-pointer'>Testimonials</p>
        <p className='text-[#101727] font-bold hover:text-pink-500  cursor-pointer'>FAQ</p>
        
    </div>
    <div className='flex gap-3.5 items-center'>
    <p className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'><i className="ri-shopping-cart-2-line text-2xl"></i></p>
    <p className='  font-bold text-[#101727]'>Login</p>
    <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-3.5 py-1.5 rounded-full text-white font-bold'>Get Started</button>
    </div>
    
    </div>
  )
}

export default Nav