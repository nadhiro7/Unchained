import Banner from '@/components/shared/Banner'
import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import Services from '@/components/shared/Services'
import { categories } from '@/consts/const'
import React from 'react'

function page() {
    return (
        <div className="text-white">
            <div className="container overflow-hidden mxWidthHome mx-auto">
                <div className={`w-full hero relative overflow-hidden flex h-[700px] flex-col items-center justify-between`}>
                    <div className='gridDesk absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] 2xl:h-[825px] lg:h-[80%]'>
                    </div>
                    <div className='lg:hidden gridMobile absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] bg-cover lg:h-[80%]'>
                    </div>
                    <div className="flex items-center flex-col w-full lg:w-[789px] mt-[160px] lg:mt-[202px] lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Services
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> Our Services<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">Whether you looking for large-scale custom software development, pro UI/UX design,<br /> or 24/7 server support, we have the team to meet your specific needs.</p>
                        </div>
                        <div className="w-full  flex  lg:flex-row gap-2 flex-wrap  items-center justify-center duration-700 max-w-[570px]">
                            {categories.map((category, index) => (
                                <div className="cat text-body-regular font-Satoshi-Regular btn hover:bg-primary-500 duration-700 text-gray-200 hover:text-white  border-[1px] border-solid border-[#72717133] rounded-[32px] py-3 px-2 w-max flex gap-2 cursor-pointer">
                                    {category}
                                    <img className='cat-img duration-700' src={`/assets/sahem.svg`} alt={`${category}`} />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden flex justify-center items-center flex-col gap-4 py-10 shdw2'>
                <Banner />
            </div>
            <Services />
        </div>
    )
}

export default page
