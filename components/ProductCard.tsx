import Image from 'next/image'
import React from 'react'
import Rating from './shared/Rating'
import { useRouter } from 'next/navigation'

const ProductCard = ({product}:{product:any}) => {
  const router = useRouter();
  return (
    <div>
        <div className='cursor-pointer' onClick={()=>{
          router.push(`/product/${product.id}`)
        }}>
            <div className='bg-gray-100 flex items-center justify-center rounded-md h-[250px] overflow-hidden'>
     <Image className='mix-blend-multiply p-8' src={product.image} width={200} height={200} alt={product.title}/>
            </div>
     <h1 className='font-bold'>{product.title}</h1>
     <p>{`${product.description.substring(0,50)}...`}  </p>
     <Rating ratings={product.rating}/>
     <p className='font-bold text-2xl'>{`$${product.price}`}</p>
        </div>
    </div>
  )
}

export default ProductCard
