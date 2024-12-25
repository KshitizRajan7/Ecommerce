"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
import Image from 'next/image'
import Link from 'next/link'
import React, { use, useEffect } from 'react'
import CategoryWiseProduct from './shared/CategoryWiseProduct'

const Homepage = () => {
  const {mensProduct,womensProduct,getMenClothing,getWomenClothing} = useSupabase();
  useEffect(()=>{
    getMenClothing();
    getWomenClothing();
  },[])
  console.log(mensProduct);
  return (
    <div>
      {/* <Image src={'https://www.amhttps://m.media-amazon.com/images/I/51M4JArk-yL._SX1500_.jpgazon.com/prime/?_encoding=UTF8&ref_=h1_npa_dec_hero&pd_rd_w=GNFaq&content-id=amzn1.sym.0afb0e3a-58f7-44f2-b00a-fb3ef01f1552&pf_rd_p=0afb0e3a-58f7-44f2-b00a-fb3ef01f1552&pf_rd_r=5H4Y903G4ACEDX1C8C24&pd_rd_wg=fnWEs&pd_rd_r=5f523fd7-8392-44a0-8704-f9b1a8a471e2'} width={1000} height={1000} alt='banner'/> */}
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-2 ' >
      {
        mensProduct.map((product:any)=>{
          return(
            <div > 
              <CategoryWiseProduct product={product}/>
              </div>
          )
        })
      }
       {
         womensProduct.map((product:any)=>{
           return(
             <div > 
              <CategoryWiseProduct product={product}/>
              </div>
          )
        })
      }
      </div>

    </div>
  )
}

export default Homepage
