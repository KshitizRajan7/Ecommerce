"use client"
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import SearchResult from '@/components/SearchResult';

const page = () => {
    const {query} =useParams();
    const {filterData,getFilteredData} = useSupabase();
    useEffect(()=>{
        getFilteredData(query!.toString());
    },[])
    // console.log(filterData);
  return (
    <div>
      <SearchResult filterData = {filterData}/>
    </div>
  )
}

export default page
