import React from 'react'

const Started = () => {
  return (
    <div className='container mx-auto bg-gray-200 rounded-md border-zinc-400 border-2 mt-3.5 mb-3.5 overflow-hidden p-10 '>
    <div className='text-center mt-2.5 mb-3.5'>
    <h1 className='font-bold text-2xl '>Get Started in 3 Steps</h1>
    <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
    </div>
    <div className='sm:grid grid-cols-1  md: grid-cols-3 gap-3.5'>
 <div className="card bg-base-100 w-full  shadow-sm p-10 hover:translate-y-0.5 hover:shadow-lg shadow-purple-500/50 ">
  <div className="card-body flex justify-center items-center">
  <div className='bg-purple-500/60 rounded-full flex justify-center items-center w-16 h-16'>
  <img src='/src/assets/user.png' className='w-10 h-10' />
  </div>
    <h2 className="card-title">Create Account</h2>
    <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
    
  </div>
</div>
 <div className="card bg-base-100 w-full  shadow-sm p-10 hover:translate-y-0.5 hover:shadow-lg shadow-purple-500/50 ">
  <div className="card-body flex justify-center items-center">
  <div className='bg-purple-500/60 rounded-full flex justify-center items-center w-16 h-16'>
  <img src='/src/assets/package.png' className='w-10 h-10' />
  </div>
    <h2 className="card-title">Choose Products</h2>
    <p className='text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
    
  </div>
</div>
 <div className="card bg-base-100 w-full  shadow-sm p-10 hover:translate-y-0.5 hover:shadow-lg shadow-purple-500/50 ">
  <div className="card-body flex justify-center items-center">
  <div className='bg-purple-500/60 rounded-full flex justify-center items-center w-16 h-16'>
  <img src='/src/assets/rocket.png' className='w-10 h-10' />
  </div>
    <h2 className="card-title">Start Creating</h2>
    <p className='text-center'>Download and start using your premium tools immediately.</p>
    
  </div>
</div>

    </div>
      
    </div>
  )
}

export default Started