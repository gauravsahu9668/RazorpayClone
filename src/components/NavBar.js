import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
   const cart=useSelector((state)=>state.cart)
  return (
    <div className='w-[75%] mx-auto py-2'>
       <div className='flex flex-row justify-between items-center'>
          <div>
          <Link to="/">
          <img src={logo} width={150} height={100}></img>
          </Link>
          </div>
          <div className='flex flex-row text-[16px] text-white gap-10'>
             <Link to="/"><p className='text-lg font-semibold'>Home</p></Link>
             <Link to="/cart">
               <div className='relative'>
                  <div className='flex items-center justify-center absolute left-3 -top-1 w-[20px] h-[20px] bg-green-600 text-white rounded-full'>{cart.length}</div>
                  <div className='mr-5'><FaShoppingCart size={"2rem"}></FaShoppingCart></div>
               </div>
             </Link>
          </div>
       </div>
    </div>
  )
}

export default NavBar
