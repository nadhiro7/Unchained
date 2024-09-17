import Banner from '@/components/shared/Banner'
import Case from '@/components/shared/Case'
import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import MeetTeam from '@/components/shared/MeetTeam'
import Partner from '@/components/shared/Partner'
import Portfolio from '@/components/shared/Portfolio'
import Services from '@/components/shared/Services'
import WhyChooseUs from '@/components/shared/WhyChooseUs'
import WorkProcess from '@/components/shared/WorkProcess'
import { categories } from '@/consts/const'
import React from 'react'

function page() {
    return (
        <div className="text-white  mxWidth">
            <div className="container mxWidth ">
                <HeroSection>
                    <div className="flex items-center flex-col w-[723px] mx-[19px] lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Mobile App Design & Development
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> My Trade Shop<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">Whatever your unique idea or needs, we’ve got the tools and know how to build your custom solution from discovery to deployment.</p>
                        </div>
                    </div>
                </HeroSection>
            </div>
            <div className='relative overflow-hidden flex justify-center items-center flex-col gap-4 py-10'>
                <Banner />
            </div>
            <Case />
            <WorkProcess />
            <Excited />
            <Footer />
        </div>
    )
}

export default page