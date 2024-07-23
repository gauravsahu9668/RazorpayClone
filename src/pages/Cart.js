import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <div className='w-[100vw] h-[90vh]'>
      {cart.length > 0 ? (
        <div className='w-[80%] mx-auto flex flex-row gap-3'>
            <div className='w-[60%] h-[90vh] overflow-y-scroll flex flex-col scrollnikalo'>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
            </div>
          <div className='w-[40%] flex flex-col p-3 justify-between '>
            <div className='flex flex-col  mt-10'>
              <div className='text-green-700 font-semibold text-lg uppercase'>Your Cart</div>
              <div className='text-green-700 font-bold text-5xl uppercase'>Summary</div>
              <p className='text-black text-lg font-semibold mt-3'>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className='flex flex-col p-3 mb-10'>
              <p className='text-black text-lg font-semibold'>Total Amount: <span className='font-bold'>${totalAmount}</span></p>
              <button className='w-full h-[50px] rounded-lg text-white text-lg text-bold bg-green-800'>Check Out Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center h-[90vh] overflow-y-hidden'>
          <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-bold'>Cart is Empty</h1>
          <Link to="/">
            <button className='px-3 py-2 text-black text-lg font-bold bg-green-600 rounded-full '>Shop Now</button>
          </Link>
        </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
