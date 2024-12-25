import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const DeliveryAddress = () => {
    const cart = useAppSelector(getCart);
  return (
    <div className="w-full">
        <div className="w-[70%] mx-auto border-b border-gray-300 py-2">
          <div className="flex w-[50%] justify-between">
            <h1 className="font-bold text-lg">1. Delivery Address</h1>
            <p className="text-sm">
              Kshitiz Rajan <br />
              Sipadol <br />
              bhaktapur <br />
              Add delivery instructions <br />
            </p>
          </div>
        </div>
        <div className="w-[70%] mx-auto border-b border-gray-300 py-2">
          <div className="flex w-[50%] justify-between">
            <h1 className="font-bold text-lg">2. Items and Delivery</h1>
          </div>
          {cart.map((product: any) => {
            return (
              <div>
                <div className="flex">
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    alt={product.title}
                  />
                  <div className="ml-4">
                    <h1 className="font-bold">{product.title}</h1>
                    <p className="text-2xl font-bold py-2">{`$${product.price}`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default DeliveryAddress;
