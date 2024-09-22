'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function Excited() {
    const pathname = usePathname()
    return (
        <section className={`container minWidth text-white py-20 ${pathname != '/' ? 'mxWidthHome mx-auto' : ''}`}>
            <div>
                <div className="flex flex-col border-[#72717133] border-[1px] border-solid lg:flex-row lg:justify-between w-full 2xl:w-[1200px] overflow-hidden hover:h-max duration-700 transform lg:mx-0 p-6 rounded-[32px] gap-3 glassmorphism">
                    <button className="text-body-medium btn duration-700 lg:order-2 border-[#FFFFFF33] flex  items-center justify-center font-Satoshi-Medium h-[88px] w-[88px] text-white border-[1px] border-solid rounded-[44px] py-2 px-4 bg-primary-500">
                        <div className="h-[88px] flex items-center">
                            <img src="/assets/sahem3.svg" alt="0" />
                        </div>
                    </button>
                    <div className=" flex gap-2 flex-col w-full items-start w-ful lg:w-[703px] justify-center duration-700 transform ">
                        <div className="glassmorphism  text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                            Excited?
                        </div>
                        <div className="h-fit duration-700 transform  block text-h4 lg:text-h2 font-Satoshi-Bold uppercase">
                            <p className="">Let’s Work Together <span className='text-primary-500'>!</span></p>
                        </div>
                        <div className="h-fit duration-700 transform  text-body-regular font-Satoshi-Regular opacity-70 uppercase">
                            <p className="">Our success in collaborating with clients is determined by effective communication, mutual understanding, and a shared commitment to achieving goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Excited