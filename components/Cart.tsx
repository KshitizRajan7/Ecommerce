"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProceedToBuy from './ProceedToBuy'
import { useAppDispatch, useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const Cart = () => {
  const cart = useAppSelector(getCart);
  console.log(cart);
  const dispatch = useAppDispatch();
  let totalPrice = 0;
  cart.forEach((items:any) =>{
    totalPrice += items.price * items.quantity;
  })
  return (
    <div className='flex w-[80%] mx-auto'>
      <ShoppingCart cart={cart} totalPrice={totalPrice}/>
      <ProceedToBuy length={cart.length} totalPrice={totalPrice}/>
              </div>
  )
}

export default Cart
