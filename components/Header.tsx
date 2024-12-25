"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import tlogo from "@/public/elogo.png";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { supabase } from "@/lib/supabase/products";

const itemsList = [
  "All",
  "Fresh",
  "Sell",
  "Gift Cards",
  "Buy Again",
  "Browsing History",
  "Health, Household & Personal Care",
];

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [user,setUser] = useState<any>(null);
  const router = useRouter();
  const cart = useAppSelector(getCart);
  const searchHandler= ()=>{
    router.push(`/search/${query}`);
  }
  useEffect(()=>{
    const getUserData = async ()=>{
      const {data:{user}} = await supabase.auth.getUser();
      setUser(user);
    }
    getUserData();
  },[])
  console.log(user);
  return (
    <>
      <div className="bg-[#007BFF] text-white py-2">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <Link href={'/'} className="w-[10%]">
            <Image src={tlogo} alt="clogo" width={40} height={40}></Image>
          </Link>
          <div className=" flex  items-center w-[60%]">
            <input
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              className="w-full p-2 rounded-l-md text-black text-center outline-none"
              type="text"
              placeholder="Search Product"
            />
            <div onClick={searchHandler} className="bg-[#F6BE32] hover:bg-[#634d18] p-2 text-black rounded-r-md cursor-pointer">
              <CiSearch size={"24px"} />
            </div>
          </div>
          <div className="flex items-center justify-around w-[20%]">
            <div onClick={()=>{
              router.push('/signin')
            }} className="cursor-pointer">
              <h1 className="text-xs hover: underline">{`${user ? user.identities[0].identity_data.full_name : 'Sign in'}`}</h1>
              <h1 className="font-medium text-sm">Account & Lists</h1>
            </div>
            <div className="cursor-pointer">
              <p className="text-xs hgo">Returns</p>
              <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <Link href={'/cart'} className="cursor-pointer">
              <p className="relative top-3 left-3">{cart.length}</p>
              <div className="flex">
                <div>
                  <CiShoppingCart size={"30px"}/>
                </div>
                <h1 className="mt-2">cart</h1>
            </div>
          </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#333333]  w-full p-2 flex justify-between items-center">
        <div>
          {itemsList.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={`/${link}`}
                className="mx-2 hover:border hover:border-white border border-transparent p-2"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div className="mr-5">
          <h1 onClick={async()=>{
            const {error} = await supabase.auth.signOut();
            router.push('./signin')
          }} className="text-[#F6BE32] font-bold cursor-pointer hover:underline">
            Sign out
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
