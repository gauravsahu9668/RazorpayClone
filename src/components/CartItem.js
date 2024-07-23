import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartslices'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const CartItem = ({item,itemindex,key}) => {
    const dispatch=useDispatch();
    const removefromcart=()=>{
        dispatch(remove(item.id))
        toast.success("item romoved from cart")
    }
    const des=item.description.substring(0,80);
    const ti=item.title.substring(0,17)
  return (
    <div className='flex flex-row  gap-10 h-[30vh] p-7 border-b-2'>
            <div className='w-[40%]'>
                <img src={item.image} className='h-full w-full'></img>
            </div>
            <div className='flex flex-col justify-start gap-4  mr-6'>
                <h1 className='text-black text-lg font-bold'>
                    {ti}
                </h1>
                <p className='text-black text-lg '>{des}...</p>
                <div className=' flex flex-row justify-between'>
                    <p className='text-green-700 font-bold text-lg'>${item.price}</p>
                    <button onClick={removefromcart} className='flex rounded-full justify-center items-center w-[40px] h-[40px] bg-red-400'>
                    <MdDelete color='darkred'></MdDelete>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
