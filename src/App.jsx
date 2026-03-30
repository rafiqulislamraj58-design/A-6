import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'remixicon/fonts/remixicon.css'
import Nav from './Componatnt/Nav'
import Footer from './Componatnt/Footer'
import Banner from './Componatnt/Banner'
import Starts from './Componatnt/Starts'
import Models from './Componatnt/Models'


const getModels = async()=>{
  const res = await fetch('/models.json')
  return res.json()

}
const modelsPromise = getModels()


const App = () => {
  const [active, setactive] = useState("Products")
  console.log(active);
  return (
    <>
   <Nav></Nav>
   <Banner/>
   <Starts />
   <ToastContainer />
   <Models modelsPromise={modelsPromise} active={active} setactive={setactive} />
   <Footer></Footer>
    </>
  )
}

export default App