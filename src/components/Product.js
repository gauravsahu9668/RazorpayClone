import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { add,remove } from '../redux/slices/cartslices'
const Product = ({post}) => {
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();
    const desc=post.description;
    const ti=post.title.substring(0,18)
    const toshow=desc.substring(0,100)
    const addtocart=()=>{
        dispatch(add(post));
        toast.success("Item added to cart")
    }
    const removefromcart=()=>{
        dispatch(remove(post.id));
        toast.success("Item remove from cart")
    }
  return (
    <div className='group flex flex-col items-center rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-1 transition-all duration-300 hover:scale-110 mt-5 mb-10 hover:bg-white'>
       <div className='text-black font-bold text-[18px] '>
        <p>{`${ti}...`}</p>
       </div>
       <div className=' p-4  text-gray-800 text-md h-[100px] mt-3'>
        <p>{`${toshow}...`}</p>
       </div>
       <div className='h-[180px] mt-3'>
        <img src={post.image} className='w-full h-full' ></img>
       </div>
       <div className='flex  items-center justify-between gap-24 h-[70px] mt-3'>
        <div><p className='text-green-600 font-bold text-lg'>${post.price}</p></div>
       {
        cart.some((p)=>p.id== post.id)? 
        (<button onClick={removefromcart} className='uppercase px-3 py-2 text-black font-semibold rounded-full border-black border-[2px] text-[18px]  group-hover:bg-slate-900  group-hover:text-white'>Remove Item</button>):
        (<button onClick={addtocart} className='uppercase px-3 py-2 text-black font-semibold rounded-full border-black border-[2px] text-[18px] group-hover:bg-slate-900  group-hover:text-white'>Add to Cart</button>)
       }
        </div>
    </div>
  )
}

export default Product
