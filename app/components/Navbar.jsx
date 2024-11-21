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
            className='w-10 h-10 rounded-full'
        />

        <div className='flex items-center gap-10'>
            {
                navItems.map((item, index)=>(
                    <Link key={index} href={item.link} className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150'>{item.label}</Link>
                ))
            }
        </div>

        <div>
            <Link href={'#'} className='text-lg hover:bg-transparent/30 p-2 rounded-md duration-150'>Sign In</Link>
        </div>
    </main>
  )
}

export default Navbar