import React from "react";
import Image from "next/image";
import Rating from "./shared/Rating";
import AddToCartContainer from "./AddToCartContainer";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
          {singleProduct.map((product: any) => {
            return (
              <div className="flex">
              <div className="flex">
                <div className="bg-gray-100 mx-2">
                  <Image
                    className="mix-blend-multiply p-1"
                    src={product.image}
                    width={400}
                    height={500}
                    alt={product.title}
                  />
                </div>
                <div className="mx-2 w-[50%]">
                  <h1 className="font-bold text-lg">{product.title}</h1>
                  <p className="text-sm">{product.description}</p>
                  <Rating ratings={product.rating} />
                  <h1 className="font-bold text-2xl">{`$${product.price}`}</h1>
                  <div>
                    <h1 className="font-bold">About This Item</h1>
                    <li className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Omnis modi laudantium cupiditate ipsa? Necessitatibus,
                      ipsum? Officiis asperiores soluta perspiciatis nesciunt?
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Omnis modi laudantium cupiditate ipsa? Necessitatibus,
                      ipsum? Officiis asperiores soluta perspiciatis nesciunt?
                    </li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Omnis modi laudantium cupiditate ipsa? Necessitatibus,
                      ipsum? Officiis asperiores soluta perspiciatis nesciunt?
                    </li>
                  </div>
                </div>
              </div>
                   <AddToCartContainer product ={product}/>
                   </div>
            );
          })}
        </div>
      </div>
  );
};

export default SingleProduct;
