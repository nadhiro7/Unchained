import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import MeetTeam from '@/components/shared/MeetTeam'
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
                                    About
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase text-center"> Welcome to UNCHAINED<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">We are Unchained. We build high performance, maintainable and business critical web applications and e-commerce for the companies around the world. We pick quality over quantity. We love Python, Django, JavaScript, React and designing engaging user experiences and front-ends.</p>
                        </div>
                        <div className="w-full xs:w-fit  overflow-hidden  flex flex-col lg:flex-row gap-3 items-center justify-center">
                            <button className="btn shadow-btn transition-all transform duration-700 bg-primary-500 w-full xs:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500">See our works</button>
                        </div>

                    </div>
                </HeroSection>
                <div className="h-[440px] lg:h-[424px] xl:h-[500px]  cat2 overflow-hidden ">
                    <div className='flex gap-5 w-full flex-wrap h-[420px] lg:h-[470px] xl:h-[570px] justify-center overflow-y-scroll cat-imgs2'>
                        <img src='/assets/cat5.png' alt='cat5' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat2.png' alt='cat2' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat33.png' alt='cat3' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat3.png' alt='cat3' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat44.png' alt='cat4' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat4.png' alt='cat4' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat5.png' alt='cat5' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                        <img src='/assets/cat1.png' alt='cat1' className='w-[45%] h-[180px] lg:w-[212px] lg:h-[212px] xl:w-[340px] xl:h-[340px] rounded-[24px]' />
                    </div>
                </div>
            </div>
            <MeetTeam />
            <WhyChooseUs />
            <Excited />
            <Footer />
        </div>
    )
}

export default page
