import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto' >
<div className="hero bg-base-200  min-h-[500px]  ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full gap-10  lg:justify-between py-10">
    <img
      src="/src/assets/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Supercharge Your <br/> Digital Workflow</h1>
      <p className="py-6 text-gray-400">
        Access premium AI tools, design assets, templates, and productivity<br/>
software—all in one place. Start creating faster today<br/>.

Explore Products
      </p>
      <div className='flex gap-2.5'>

        <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white">Explore Products</button>
      <button className="btn btn-outline btn-secondary rounded-full px-6"><i class="ri-play-line"></i> Watch Demo</button>

      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Banner