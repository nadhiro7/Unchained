import HeroSection from '@/components/shared/HeroSection'
import Post from '@/components/shared/Post'
import React from 'react'

function page() {
    return (
        <div className="text-white mxWidthHome mx-auto overflow-hidden">
            <div className="container ">
                <HeroSection height={'h-[700px]'} style={''}>
                    <div className="flex items-center flex-col w-full lg:w-[923px] ] mt-[192px] lg:mt-[228px]  lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center" >
                            <div className="overflow-hidden h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Stack Technology
                                </div>
                            </div>
                            <div className="overflow-hidden h-fit text-h3 sm:text-h1 font-Satoshi-Bold uppercase text-center"> 5 Uses of Artificial Intelligence that will blow your mind<span className="text-primary-500">.</span></div>
                        </div>
                    </div>
                </HeroSection>
            </div>
            <Post />
        </div>
    )
}

export default page