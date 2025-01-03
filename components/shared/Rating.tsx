import React from 'react'
import rating from '../../public/starIcon.png'
import Image from 'next/image'

const Rating = ({ratings}:{ratings:any}) => {
    ratings = JSON.parse(ratings);
  return (
    <div className=' flex items-center'>
        {
            Array(4).fill(1).map((dummyItem)=>
                <Image src={rating} width={20} height={20} alt='rating'/>
        )
    }
    <h1 className='text-[#807185] ml-2 font-medium'>{ratings.count} ratings</h1>
    </div>
  )
}

export default Rating
