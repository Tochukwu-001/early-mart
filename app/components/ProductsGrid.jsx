"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ProductsGrid = () => {

  const products = [
      {
        name: "T-Shirt",
        category: "Clothing", 
        price: "50.00",
        image: "/asset4.png"
      },
      {
        name: "T-Shirt",
        category: "Clothing", 
        price: "50.00",
        image: "/asset5.png"
      },
      {
        name: "T-Shirt",
        category: "Clothing", 
        price: "50.00",
        image: "/asset6.png"
      },
    ]

  return (
    <main className='lg:px-[5rem] p-3 grid grid-cols-1 lg:grid-cols-3 md:gap-10 gap-5 my-5'>
      {
        products.map((product, i) => (
          <div key={i} className='border flex flex-col gap-5 mt-2 rounded-lg p-3 hover:shadow-lg hover:border-none duration-200'>
            <h2 className='text-center font-semibold text-2xl text-blue-600'>{product.name}</h2>
            <p className='text-center text-gray-500 text-sm'>{product.category}</p>
            <p className='text-center text-red-500 text-sm'>N{product.price}</p>
            <Image
              src="/asset4.png"
              alt='product'
              width={500}
              height={500}
              className='w-[15rem] h-[20rem] mx-auto'
            />
            <Link href={"#"} className='rounded-lg flex items-center gap-4 p-2 justify-center uppercase w-[9rem] mx-auto bg-red-500 text-white font-semibold hover:text-red-500 hover:bg-white hover:border hover:border-red-500 transition-all text-sm'>
              <p>Buy now</p>
              <FaArrowRightLong />
            </Link>
          </div>
        ))
      }
    </main>
  )
}

export default ProductsGrid