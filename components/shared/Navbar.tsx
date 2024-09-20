'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navItem } from '@/consts/const'
import { usePathname } from 'next/navigation'

function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    const pathname = usePathname()
    return (
        <nav className={`w-screen z-10 overflow-hidden transition-all transform duration-1000 text-white navbar pt-4 pb-4 ${showMenu ? 'navbarMobile h-screen flex flex-col justify-between ' : 'h-[80px]'}`}>
            <div className={`container ${pathname != '/' ? 'mxWidthHome mx-auto' : ''}`}>
                <div className='flex justify-between items-center w-full'>
                    <Link className='logo' href={'/'}>
                        <img src='/assets//logo.svg' alt='logo' className='w-[99px] lg:w-[151px] h-[20px] lg:h-[32px] ' />
                    </Link>
                    <div className='menu_desktop hidden lg:flex'>
                        <ul className='flex space-x-8'>
                            {navItem.map((item, index) => (
                                <li key={index} className={`${pathname == item.link ? 'text-primary-500' : ''} hover:text-primary-500 text-small font-Satoshi-Regular duration-50`}>
                                    <Link href={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='z-200 menu_mobile rounded-[44px] border p-3 w-[48px] h-[48px] lg:hidden border-primary-500 cursor-pointer' onClick={handleShowMenu}>
                        <Image src={showMenu ? '/assets/closeMenu.svg' : '/assets/menu.svg'} className='duration-1000' alt='menu' width={24} height={24} />
                    </div>

                    <div className='hidden lg:flex'>
                        <button className='btn transition-all transform duration-500 bg-primary-500 w-fit contact-btn h-fit rounded-[44px] px-4 py-3 text-button-medium-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500'>Contact us</button>
                    </div>
                </div>
                <div className={`mt-3 flex lg:hidden transition-all transform flex-col justify-center items-center `}>
                    <ul className='flex flex-col gap-16 items-center '>
                        {navItem.map((item, index) => (
                            <li key={index} className={`${pathname == item.link ? 'text-primary-500' : ''} hover:text-primary-500 text-h4 font-Satoshi-Bold duration-500`}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className={`block lg:hidden btn transition-all duration-500 transform self-center contact-btn-mobile w-[388px] h-[72px] rounded-[44px] px-9 py-6 text-button-large-size font-Satoshi-Medium border-[1px] border-solid border-primary-500 `}>Contact us</button>

                <div className='highlight w-[390px] h-[1px] lg:w-[855px]' />
            </div>
        </nav>
    )
}

export default Navbar