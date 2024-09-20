import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'

import Portfolio from '@/components/shared/Portfolio'
import React from 'react'

function page() {
    return (
        <div className="text-white overflow-hidden ">
            <div className="  mx-auto h-[900px]">
                <HeroSection height={'h-full '} style={'bg-[center]'} >
                    <div className="flex container items-center flex-col w-full lg:w-[789px] mt-[304px] lg:mt-[328px] xl:mt-[326px] lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Portfolio
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> Our Portfolio of Success Stories<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60 w-full lg:w-[757px]">We work with clients in all sectors and of all sizes, from bootstrapped startups to Fortune 500 companies.</p>
                        </div>

                    </div>
                    <div className='mxWidthHome relative overflow-hidden flex justify-start items-start mx-auto flex-col gap-4 '>
                        <div className='partnerRoot'>
                            <div className='flex flex-col items-center gap-6 mt-6 partners scroll-mobile xs:scroll-desktop'>
                                <div className='flex gap-10'>
                                    <img src='/assets/b2.svg' alt='partner' />
                                    <img src='/assets/b2.svg' alt='partner' />
                                    <img src='/assets/b1.svg' alt='partner' />
                                    <img src='/assets/b1.svg' alt='partner' />
                                    <img src='/assets/b3.svg' alt='partner' />
                                    <img src='/assets/b3.svg' alt='partner' />
                                    <img src='/assets/b4.svg' alt='partner' />
                                    <img src='/assets/b4.svg' alt='partner' />
                                    <img src='/assets/b5.svg' alt='partner' />
                                    <img src='/assets/b5.svg' alt='partner' />
                                    <img src='/assets/b6.svg' alt='partner' />
                                    <img src='/assets/b6.svg' alt='partner' />
                                    <img src='/assets/b7.svg' alt='partner' />
                                    <img src='/assets/b7.svg' alt='partner' />
                                    <img src='/assets/b2.svg' alt='partner' />
                                    <img src='/assets/b2.svg' alt='partner' />
                                    <img src='/assets/b1.svg' alt='partner' />
                                    <img src='/assets/b1.svg' alt='partner' />
                                    <img src='/assets/b3.svg' alt='partner' />
                                    <img src='/assets/b3.svg' alt='partner' />
                                    <img src='/assets/b4.svg' alt='partner' />
                                    <img src='/assets/b4.svg' alt='partner' />
                                    <img src='/assets/b5.svg' alt='partner' />
                                    <img src='/assets/b5.svg' alt='partner' />
                                    <img src='/assets/b6.svg' alt='partner' />
                                    <img src='/assets/b6.svg' alt='partner' />
                                    <img src='/assets/b7.svg' alt='partner' />
                                    <img src='/assets/b7.svg' alt='partner' />
                                </div>
                            </div>
                        </div>
                    </div>
                </HeroSection>

            </div>
            <Portfolio />
        </div>
    )
}

export default page
