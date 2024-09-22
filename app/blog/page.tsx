import Input from '@/components/form/Input'
import Blogs from '@/components/shared/Blogs'
import Excited from '@/components/shared/Excited'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/shared/HeroSection'
import React from 'react'

function page() {
    return (
        <div className="text-white minWidth">
            <div className="container  mxWidthHome mx-auto">
                <HeroSection height='h-[700px]' style={'bg-[top]'}>
                    <div className="flex items-center flex-col w-full lg:w-[723px] ] mt-[280px] lg:mt-[204px] 2xl:mt-[194px] lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Blog
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> Latest News<span className="text-primary-500">.</span></div>
                        </div>
                        <div className="overflow-hidden h-fit">
                            <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">Whatever your unique idea or needs, we’ve got the tools and know how to build your custom solution from discovery to deployment.</p>
                        </div>
                        <Input />
                    </div>
                </HeroSection>
            </div>
            <Blogs />
        </div>
    )
}

export default page
