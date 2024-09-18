import { feature } from '@/consts/const'
import React from 'react'

function WhyChooseUs() {
    return (
        <section className='container relative mxWidth flex-col flex justify-center items-center gap-12 py-[120px]'>
            <div className='gridDesk absolute top-[50%] bg-[center] translate-x-[-50%] left-[50%] translate-y-[-50%] 2xl:h-[825px] lg:h-[80%]'>
            </div>

            <div className="flex items-center flex-col mx-[19px] w-full lg:w-[723px] lg:mx-0  gap-6 ">
                <div className=" flex  flex-col w-full items-center justify-center" >
                    <div className="overflow-hidden h-fit">
                        <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                            Why choose us?
                        </div>
                    </div>
                    <div className="overflow-hidden text-wrap h-fit text-h3 sm:text-h2 font-Satoshi-Bold uppercase text-center">Experienced, creative,
                        and helpful<span className="text-primary-500">.</span></div>
                </div>
                <div className="overflow-hidden h-fit">
                    <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">We are a digital creative agency located in LA, We focus on creating responsive websites, web design, SEO services, UI/UX Design, website with all over maintenance, hosting, domain name registration, Graphic design, and Visual identities for your business.</p>
                </div>
            </div>
            <div className='flex w-full flex-wrap justify-center'>
                {
                    feature.map((item, index) => (
                        <div key={index} className='flex sm:basis-1/2 lg:basis-1/3 items-center flex-col basis-full mb-5  gap-2 '>
                            <div className="text-h3 font-Satoshi-Bold text-primary-500  w-fit">
                                0{index + 1}
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div className="flex flex-col text-wrap">
                                    <div className="text-h4 font-Satoshi-Bold uppercase text-center">{item.why}<span className="text-primary-500">.</span></div>
                                    <div className="overflow-hidden h-fit">
                                        <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChooseUs