import React from 'react'

const Start = ({active ,setactive}) => {
  return (
    <div>
        <div className="tabs tabs-box bg-transparent justify-center">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Products"  onClick={()=>setactive("Products") } defaultChecked/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Cart" 
  onClick={()=>setactive("Cart")}  />
</div>
    </div>
  )
}

export default Start