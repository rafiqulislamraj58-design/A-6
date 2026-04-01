import React from 'react'
const Start = ({ active, setactive }) => {
  return (
    <div className="flex justify-center gap-4 mt-5">
      <button
        onClick={() => setactive("Products")}
        className={`px-6 py-2 rounded-full transition ${
          active === "Products"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Products
      </button>
      <button
        onClick={() => setactive("Cart")}
        className={`px-6 py-2 rounded-full transition ${
          active === "Cart"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Cart
      </button>
    </div>
  )
}

export default Start