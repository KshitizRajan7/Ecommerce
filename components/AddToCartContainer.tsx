import React from 'react'
import Image from 'next/image'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

const AddToCartContainer = ({product}:{product:any}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className='border border-gray-100 rounded-md w-[50%] h-fit text-sm'>
        <div>
        {/* <Image src={}/> */}
        </div>
      <div className='p-4'>
        <h1 className='text-sm'> <span className='text-[#147C8F]'>Free delivery</span> date <span className='text-[#147C8F]'>Details</span> link </h1>
        <h1 className='mt-4'>fastest delivery  </h1>
        <p  className='text-[#147C8F]'>Deliver to kshitiz - bhaktapur</p>

        <button onClick={()=>{
          dispatch(addToCart(product));
          router.push('/cart');
        }} className='bg-[#FFD814] w-full rounded-full py-2 text-black'>Add to Cart</button>
        <button className='bg-[#FFA41C] w-full rounded-full py-2 my-2 text-black'>Buy Now</button>
      </div>
    </div>
  )
}

export default AddToCartContainer
