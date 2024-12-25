"use client";
import React from "react";
import elogo from "@/public/elogo.png";
import { FaLock } from "react-icons/fa6";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";
import Image from "next/image";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const Checkout = () => {

  const cart = useAppSelector(getCart);
  let totalPrice = 0;
  cart.forEach((item:any)=>{
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="absolute top-0 w-full bg-white ">
        <div className="flex mx-auto w-[70%] items-center pb-5 justify-between border-b border-gray-400">
          <div>
            <Image src={elogo} alt="logo" width={100} height={100} />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Checkout</h1>
          </div>
          <div className="text-gray-400">
            <FaLock size={"30px"} />
          </div>
          </div>
      <div className="flex w-[70%] justify-between mx-auto">
      <DeliveryAddress/>
      <OrderSummary totalPrice = {totalPrice}/>
    </div>
    </div>
  );
};

export default Checkout;
