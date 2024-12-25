"use client";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="absolute top-0 w-full  bg-white py-12">
      <div className="mx-auto w-[70%]">
        <h1>Thankyou for ordering with Kshitiz Rajan Mart.</h1>
        <div>
          <h1 className="font-bold py-3 border-b underline">Order Details</h1>
          {cart.map((product: any) => {
            return (
              <div className="flex">
                <div>
                 <Image
                  src={product.image}
                  height={100}
                  width={100}
                  alt={product.title}
                />
                </div>
                <div  className="font-bold ml-5">
                  <h1>{product.title}</h1>
                  <h1>{product.price}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
        <Link href={'/'} className="bg-yellow-400 px-4 py-1 rounded-md" >Buy more products</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
