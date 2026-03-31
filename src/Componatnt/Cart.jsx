import React from 'react'

const Cart = ({cartItems,removeCart,clearCart}) => {
const total = cartItems.reduce((sum,item)=>{
return sum+item.price},0)



  if(cartItems.length === 0){
      return <p className='text-center mt-3.5 mb-3.5 text-2xl font-bold text-[#101727] '>No items in cart</p>
    }
  return (
    <div className='container mx-auto'>
    <h1 className='text-2xl text-[#101727] font-bold mt-1.5 mb-1.5'>Your Cart</h1>
    {cartItems.map(item=><div className='container mx-auto mb-3.5'>
      <div className='border  border-zinc-300 p-6 bg-gray-300 rounded-md'>
     <div className=' flex  gap-2.5 justify-between'>
<div>
   <div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center' >
      <div>{item.icon}</div>
      </div>
       <div>
      <h2 className='font-bold text-4xl'>{item.name}</h2>
      <p className='font-bold text-2xl'>${item.price}</p>
       </div>
</div>
      

     <button onClick={()=>removeCart(item.id)} className='text-xl text-yellow-500 mt-1.5'>remove</button>

     </div>
    
      </div>
      
    </div>)}

    <div className='flex justify-between mb-3.5'>
 <div className='text-2xl font-bold'>Total</div>
 <div className='text-2xl font-bold'>${total}</div>
    </div>
    <button onClick={clearCart} className='w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mb-5 py-2'>Proceed to Checkout</button>
    </div>
  )
}

export default Cart