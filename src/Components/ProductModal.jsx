"use client";
import Image from "next/image";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
export default function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <button onClick={() => setIsOpen((cl) => !cl)}>open modal</button>
      )}
      {!isOpen && (
        <div className="border-2 border-grey-500 rounded-lg shadow-lg h-[500px] w-[650px] flex items-center justify-around px-10">
          <div className="absolute text-2xl mt-[-440px] ml-[580px] hover:bg-black/30 p-1 rounded-full transition ease-in-out duration-300 cursor-pointer ">
            <RxCross1 onClick={() => setIsOpen((op) => !op)} />
          </div>
          <div className="">
            <Image
              className="rounded-md object-cover h-96 w-64 hover:scale-110 cursor-pointer transition ease-in-out duration-300"
              src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2022/03/15/3122001-5146588.jpg?itok=GXHLC5HL
          
          hover:scale-110 transition ease-in-out duration-300"
              alt="wheat-img"
              width={300}
              height={300}
            />
          </div>
          <div className=" flex flex-col gap-20 ">
            <div className="flex flex-col gap-3 ">
              <h1>Product Title</h1>
              <p> Product Description</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1>Product Title</h1>
              <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-300 dark:focus:ring-blue-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
