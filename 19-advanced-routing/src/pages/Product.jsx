import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
    <div className='flex justify-center gap-5'> 
    <Link to='men'>Men</Link>
    <Link to='women'>Women</Link>
    </div>
    <Outlet/>
    </div>
  )
}

export default Product