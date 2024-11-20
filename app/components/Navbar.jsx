"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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
            className='w-8 h-8 rounded-full bg-white'
        />

        <div>
            {
                navItems.map((item, index)=>(
                    <Link key={index} href={item.link} className='text-lg hover:underline hover:underline-offset-1 duration-150'>{item.label}</Link>
                ))
            }
        </div>

        <div>
            <Link href={'#'}>Sign In</Link>
        </div>
    </main>
  )
}

export default Navbar