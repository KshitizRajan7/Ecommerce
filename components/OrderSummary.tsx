import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { supabase } from "@/lib/supabase/products";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";

interface Product{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  quantity:number,
  rating:number
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummary = ({totalPrice} :{totalPrice:number}) => {
  const cart = useAppSelector(getCart);
  const createStripeSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });
    //redirect to checkout session

    const result = await stripe?.redirectToCheckout({
      sessionId:checkoutSession.data.id
    })

    if(result?.error){
      console.log(result.error.message);
    }

  };

  return (
    <div className="border border-gray-500 p-4 mt-5 w-[40%] h-fit">
      <div>
        <h1 className="font-bold text-xl mb-5">Order Summary</h1>
        <div className="text-xs">
          <div className="flex items-center justify-between">
            <p>Items:</p>
            <p>123</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery:</p>
            <p>123</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total:</p>
            <p>123</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied:</p>
            <p>123</p>
          </div>
          <div className="font-bold flex text-xl text-red-600 py-3 border-t border-b border-gray-400 my-1">
            <h1>Order Total:</h1>
            <p>${totalPrice}</p>
          </div>
        </div>
        <button
          onClick={createStripeSession}
          className="bg-[#FFD814] w-full rounded-md px-4 py-1 my-3"
        >
          Place your order now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
