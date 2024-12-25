import React from 'react'
import ProductCard from './ProductCard'
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';

const SearchResult = ({filterData}:{filterData:any}) => {
    let {products} = useSupabase();
    console.log(products);
  return (
    <div className='w-[80%] m-auto'>
        <div className='mt-10'>
            <div>
            <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
            <p>price may vary based on products</p>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                {              
                filterData?.map((product:any)=>{
                    return(
                        <div key={product.id}>
                            <ProductCard product ={product}/>
                            </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SearchResult
