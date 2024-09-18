import React from 'react'
import HeroSection from './HeroSection'
import { categories } from '@/consts/const'

function Wwb() {
    return (
        <div>
            <div className='w-full h-max  relative  overflow-hidden flex flex-col justify-center items-center gap-16 py-[120px]'>
                <div className='gridDesk absolute top-[-100px]  translate-x-[-50%] left-[50%]  2xl:h-[825px] lg:h-[80%]'>
                </div>
                <div className='lg:hidden gridMobile absolute top-[-100px] translate-x-[-50%] left-[50%]   lg:h-[80%]'>
                </div>
                <div className="flex items-center flex-col  lg:mx-0  gap-6 ">
                    <div className=" flex  flex-col w-full items-center justify-center" >
                        <div className="h-fit">
                            <div className=" glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                What we build ?
                            </div>
                        </div>
                        <div className="h-fit text-h4 sm:text-h2 font-Satoshi-Bold uppercase"><p className="">Building top</p></div>
                        <div className="h-fit text-h4 sm:hidden block sm:text-h2 font-Satoshi-Bold uppercase"><p className="text-center">quality software & apps for over fifteen years<span className="text-primary-500">.</span></p></div>
                        <div className="h-fit hidden sm:block text-h2 sm:text-h2 font-Satoshi-Bold uppercase"><p className="">quality software & apps</p></div>
                        <div className="h-fit hidden sm:block text-h2 sm:text-h2 font-Satoshi-Bold uppercase"><p className="text-center">for over fifteen years<span className="text-primary-500">.</span></p></div>
                    </div>
                    <div className="h-fit">
                        <p className=" text-center font-Satoshi-Regular text-body-regular opacity-60">Revolutionize your business with our mobile app and software development expertise, delivering <br /> innovative solutions to elevate your brand and boost your bottom line.</p>
                    </div>
                    <div className="w-full  flex  lg:flex-row gap-3 flex-wrap  items-center justify-center duration-700 max-w-[570px]">
                        {categories.map((category, index) => (
                            <div key={index} className="cat text-body-regular font-Satoshi-Regular btn hover:bg-primary-500 duration-700 text-gray-200 hover:text-white  border-[1px] border-solid border-[#72717133] rounded-[32px] py-3 px-2 w-max flex gap-2 cursor-pointer">
                                {category}
                                <img className='cat-img duration-700' src={`/assets/sahem.svg`} alt={`${category}`} />
                            </div>

                        ))}
                    </div>
                </div>
                <div className='overflow-x-scroll overflow-hidden relative cat-imgs w-full'>
                    <div className='flex gap-5 overflow-x-scroll justify-center cat-imgs2'>
                        <img src='/assets/cat1.png' alt='cat1' className='w-[340px] h-[340px] rounded-[24px]' />
                        <img src='/assets/cat2.png' alt='cat2' className='w-[340px] h-[340px] rounded-[24px]' />
                        <img src='/assets/cat3.png' alt='cat3' className='w-[340px] h-[340px] rounded-[24px]' />
                        <img src='/assets/cat4.png' alt='cat4' className='w-[340px] h-[340px] rounded-[24px]' />
                        <img src='/assets/cat5.png' alt='cat5' className='w-[340px] h-[340px] rounded-[24px]' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wwb