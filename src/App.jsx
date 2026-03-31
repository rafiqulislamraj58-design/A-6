import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'remixicon/fonts/remixicon.css'
import Nav from './Componatnt/Nav'
import Footer from './Componatnt/Footer'
import Banner from './Componatnt/Banner'
import Starts from './Componatnt/Starts'
import Models from './Componatnt/Models'
import Cart from './Componatnt/Cart'
import Start from './Componatnt/Start'




const getModels = async()=>{
  const res = await fetch('/models.json')
  return res.json()

}
const modelsPromise = getModels()


const App = () => {
  const [active, setactive] = useState("Products")
  const [cartItems, setcartItems] = useState([])
  
const removeCart = (id)=>{
  const remove = cartItems.filter( item=>item.id!== id)
  setcartItems(remove)
}

const clearCart = ()=>{
  setcartItems([])
}
  console.log(active);
  return (
    <>
   <Nav cartItems={cartItems} />
   <Banner/>
   <Starts />
   <Start  active={active} setactive={setactive} />
   <ToastContainer />
  { active==="Products"&&( <Models modelsPromise={modelsPromise} 
  active={active}
  setactive={setactive}
  cartItems={cartItems}
  setcartItems={setcartItems}
  clearCart={clearCart}
   />)}
   {active==="Cart" &&(<Cart cartItems={cartItems}  removeCart={removeCart}  clearCart={clearCart} />)}
   <Footer></Footer>
    </>
  )
}

export default App