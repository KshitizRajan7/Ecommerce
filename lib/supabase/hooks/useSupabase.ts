import { useState } from "react"
import { supabase } from "../products";

export const useSupabase = () =>{
    const [products,setProducts] =useState<any>([]); 
    const [filterData,setFilterData] =useState<any>([]); 
    const [singleProduct,setSingleProduct] =useState<any>([]); 
    const [mensProduct,setMensProduct] =useState<any>([]); 
    const [womensProduct,setWomensProduct] =useState<any>([]); 
    
    const getDataFromSupabase = async() => {
        let { data, error } = await supabase.from('product').select('*');
        if(data){
            setProducts(data);
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }

    const getFilteredData = async(query:string) => {
        let { data, error } = await supabase.from('product').select('*').or(`title.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`);
        if(data){
            setFilterData(data);
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }

    const getSingleProduct = async(id:number)=>{
        let{data, error} = await supabase.from('product').select('*').eq('id',id);
        if(data){
            setSingleProduct(data);
        }
        if(error){
            console.error(error);
        }
    }

    const getMenClothing = async() =>{
        let {data, error} = await supabase.from('product').select('*').ilike('category',`${`men's clothing`}`);
        if(data){
            setMensProduct(data);
        }
        if(error){
            console.error(error);
        }
    }

    
    const getWomenClothing = async() =>{
        let {data, error} = await supabase.from('product').select('*').ilike('category',`${`women's clothing`}`);
        if(data){
            setWomensProduct(data);
        }
        if(error){
            console.error(error);
        }
    }

return { products,filterData,singleProduct,mensProduct,womensProduct,getFilteredData,getDataFromSupabase,getSingleProduct,getMenClothing,getWomenClothing};
}