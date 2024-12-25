import React from "react";
import Subtotal from "./shared/Subtotal";
import { useRouter } from "next/navigation";

const ProceedToBuy = ({
  length,
  totalPrice,
}: {
  length: number;
  totalPrice: number;
}) => {
  const router = useRouter();
  return (
    <div className=" w-[20%] h-fit border border-gray-300 ml-4">
      <div className="p-4 text-sm">
        <p>
          {" "}
          <span className="text-green-600 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            ducimus!
          </span>
        </p>
        <Subtotal left={true} length={length} totalPrice={totalPrice} />
        <button
          onClick={() => {
            router.push("/checkout");
          }}
          className="bg-[#FFD814] w-full py-1 rounded-md shadow my-3 text-black"
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default ProceedToBuy;
