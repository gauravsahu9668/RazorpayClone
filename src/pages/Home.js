import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL="https://fakestoreapi.com/products";
  const [loading,setloading]=useState(false);
  const [posts,setposts]=useState([])
  async function fetchproductdata(){
     setloading(true);
     try{
      const res=await fetch(API_URL);
      const data=await res.json()
      console.log(data);
      setposts(data)
     }
     catch(error){
      console.log(error)
     }
     setloading(false)
  }
  useEffect(()=>{
    fetchproductdata();
  },[])
  return (
    <div className='w-[100%]'>
      {
        loading ? <Spinner></Spinner>:
        posts.length > 0 ? (
          <div className='w-[70%] grid grid-cols-3 home  mx-auto gap-8 mt-7 items-center'>
            {
              posts.map((post)=>{
              return (
                <Product key={post.id} post={post}></Product>
              )
              })
            }
          </div>
        ):
         <div> No data found</div>
      }
    </div>
  )
}

export default Home
