"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const navItems = [
        {
            label: "Home",
            link: '/'
        },
        {
            label: "About Us",
            link: '#'
        },
        {
            label: "Contact",
            link: '#'
        },
        {
            label: "Locations",
            link: '#'
        },
    ]
    return (
        <main className='bg-gray-800 text-white p-3 flex items-center justify-between'>
            <Image
                src={'/logo.png'}
                alt='logo'
                width={500}
                height={500}
                className='w-10 h-10 rounded-full z-50'
            />

            <div className='flex items-center gap-10 max-lg:flex-col max-lg:h-dvh max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:justify-center max-lg:w-full max-lg:bg-gray-800'>
                {
                    navItems.map((item, index) => (
                        <Link key={index} href={item.link} className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150'>{item.label}</Link>
                    ))
                }
            </div>

            <div>
                <Link href={'#'} className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150 flex items-center gap-3'>
                    <FaRegUser />
                    Sign In
                </Link>
            </div>

            <button className='text-3xl lg:hidden z-50'>
                <IoMenuOutline />
            </button>
        </main>
    )
}

export default Navbar