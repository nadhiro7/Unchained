'use client'
import { navItem } from '@/consts/const'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Footer() {
    const pathname = usePathname()
    return (
        <footer className={`container text-white py-12 flex flex-col gap-6 ${pathname != '/' ? 'mxWidthHome mx-auto' : ''}`}>
            <div className='flex sm:justify-between justify-center flex-col sm:flex-row gap-8 px-5 sm:px-0 items-center w-full'>
                <Link className='logo' href={'/'}>
                    <img src='/assets//logo.svg' alt='logo' className='w-[99px] lg:w-[151px] h-[20px] lg:h-[32px] ' />
                </Link>
                <div className='menu_desktop flex'>
                    <ul className='flex gap-9 flex-wrap justify-center'>
                        {navItem.map((item, index) => (
                            <li key={index} className='hover:text-primary-500 text-small font-Satoshi-Regular duration-500'>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className='hover:text-primary-500 text-small font-Satoshi-Regular duration-500'>
                            <Link href={'ContactUS'}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='highlight2 self-center w-[390px] h-[2px] lg:w-[944px]' />
            <div className='flex justify-between text-small font-Satoshi-Regular sm:flex-row gap-8 px-5 sm:px-0 items-center w-full'>
                <div className=''>
                    Copyright Bern 2024
                </div>
                <div className='menu_desktop flex'>
                    Privacy & Cookies
                </div>
            </div>
        </footer>
    )
}

export default Footer