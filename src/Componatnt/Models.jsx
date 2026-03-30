import React, {use, useState } from 'react'
import { toast } from 'react-toastify'

const Models = ({modelsPromise,active,setactive}) => {
    const models = use(modelsPromise)
    const [isAdd, setisAdd] = useState([])
    
  return (
    <div className='container mx-auto '>
    <div className='text-center'>
       <h1 className='font-bold text-4xl text-[#101727] '>Premium Digital Tools</h1>
       <p className='text-gray-400'>Choose from our curated collection of premium digital products designedto<br/> boost your productivity and creativity.</p>
    </div>
  
 
<div className="tabs tabs-box bg-transparent justify-center">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Products"  onClick={()=>setactive("Products") } defaultChecked/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Cart" 
  onClick={()=>setactive("Cart")}  />
</div>
  {active==="Products" &&(  <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 w-11/12  ' >
        {models.map(model=><div key={model.id}>
            <div className='border-zinc-500 border-2 rounded-md w-full p-6 transform transition-transform duration-300 hover:scale-101 hover:shadow-lg shadow-purple-500/50 '>
<div className='flex justify-end'>
    <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-1.5 rounded-full text-white '>{model.tagType}</button>
</div>
<div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
    <div>{model.icon}</div>
</div>
<h3 className='text-4xl text-[#101727] font-bold'>{model.name}</h3>
<p>{model.description}</p>
<p className='font-bold text-2xl'> ${model.price} <span className='text-zinc-400'>/{model.period}</span></p>
<p>{model.features.map(item=><div > <span className='text-green-500'> <i className="ri-check-line"></i></span> {item}</div>)}</p>
<button onClick={()=>{setisAdd([...isAdd,model.id])
toast.success('added to cart')}} className='rounded-full py-1.5  w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-3.5 transform duration-200 hover:translate-y-0.5 hover:shadow-lg shadow-purple-500/50'> {isAdd.includes(model.id)? "added to cart":"Buy"}</button>
        </div>
        </div>)}
    </div>)}
    
    </div>
  )
}

export default Models