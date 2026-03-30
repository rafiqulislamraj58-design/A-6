import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto mt-3.5 mb-0.5' >
<div className="hero bg-base-200  min-h-[500px]  ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full gap-10  lg:justify-between py-10">
    <img
      src="/src/assets/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
    <div className="badge badge-soft badge-primary w-96 mb-2.5 text-right py-3.5"><i class="ri-radio-button-line"></i> New: AI-Powered Tools Available</div>
      <h1 className="text-5xl font-bold">Supercharge Your <br/> Digital Workflow</h1>
      <p className="py-6 text-gray-400">
        Access premium AI tools, design assets, templates, and productivity<br/>
software—all in one place. Start creating faster today<br/>.

Explore Products
      </p>
      <div className='flex gap-2.5'>

        <button className="btn bg-gradient-to-r shadow-none from-purple-500 to-pink-500 rounded-full text-white hover:translate-y-0.5 transition-all duration-300 hover:shadow-lg shadow-purple-500/50">Explore Products</button>
      <button className="btn btn-outline btn-secondary rounded-full shadow-none px-6 hover:translate-y-0.5  transition-all duration-300 hover:shadow-lg shadow-purple-500/50"><i class="ri-play-line"></i> Watch Demo</button>

      </div>
      
    </div>
  </div>
</div>


    </div>
  )
}

export default Banner