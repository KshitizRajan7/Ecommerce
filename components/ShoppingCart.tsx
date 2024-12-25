"use client";
import { useAppDispatch} from "@/lib/supabase/hooks/redux";
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromCart } from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import Subtotal from "./shared/Subtotal";

const ShoppingCart = ({cart,totalPrice}:{cart:any ,totalPrice:number}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-[70%]">
      <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="font-bold text-2xl  py-5">
          ShoppingCart
        </h1>
        <p className="font-medium">Price</p>
      </div>

      {cart.map((product: any) => {
        return (
          <div className="py-4 flex justify-between border-b border-gray-200">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />{" "}
              </div>
              <div className="ml-5">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] my-1 font-bold text-xs">
                  In Stock
                </p>
                <p onClick={()=>{
                    dispatch(removeFromCart(product.id));
                }} className="text-red-600 w-fit text-lg cursor-pointer">REMOVE</p>
                <div className="font-bold w-fit my-4 text-black text-sm flex gap-10 items-center bg-gray-400 rounded-md px-5 py-1">
                    <div onClick={()=>{
                      product.quantity > 1 && dispatch(decrementQuantity(product))
                    }} className="cursor-pointer">-</div>
                    <div>{product.quantity}</div>
                    <div onClick={()=>{
                      dispatch(incrementQuantity(product))
                    }} className="cursor-pointer">+</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                <span className="line-through">{`$${product.price}`}</span>
              </p>
            </div>
          </div>
        );
      })}
      <h1 onClick={()=>{
        dispatch(clearAllCart());
      }} className="text-red-600 font-bold cursor-pointer mt-4">CLEAR ALL</h1>
      <Subtotal left={false} length={cart.length} totalPrice={totalPrice}/>
      {/* <h1 className="text-right text-lg">{`SubTotal (${cart.length} items ) :` } <span className="font-bold">{`$${totalPrice}`}</span></h1> */}
    </div>
  );
};

export default ShoppingCart;
