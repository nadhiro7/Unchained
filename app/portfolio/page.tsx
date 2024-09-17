import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import MeetTeam from '@/components/shared/MeetTeam'
import Partner from '@/components/shared/Partner'
import Portfolio from '@/components/shared/Portfolio'
import WhyChooseUs from '@/components/shared/WhyChooseUs'
import React from 'react'

function page() {
    return (
        <div className="text-white  mxWidth overflow-hidden">
            <div className="container mxWidth ">
                <HeroSection>
                    <div className="flex items-center flex-col w-[723px] mx-[19px] lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Portfolio
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> Our Portfolio of Success Stories<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">We work with clients in all sectors and of all sizes, from bootstrapped startups to Fortune 500 companies.</p>
                        </div>

                    </div>
                </HeroSection>
            </div>
            <div className='relative overflow-hidden flex justify-center items-center flex-col gap-4 py-10'>
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
            <Portfolio />
            <Excited />
            <Footer />
        </div>
    )
}

export default page
