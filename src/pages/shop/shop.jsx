import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      shop
      <div>
        <Link to='/shop-single'>shop single</Link>
      </div>
    </div>
  )
}

export default Shop
