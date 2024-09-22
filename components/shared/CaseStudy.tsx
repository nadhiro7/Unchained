import React from 'react'
import { caseStudies } from '@/consts/const'
import CardCase from '../card/CardCase'

function CaseStudy() {
    return (
        <section className='container minWidth py-[120px]'>
            <div className='flex items-center flex-col'>
                <div className='w-full h-max  relative overflow-hidden flex flex-col justify-center items-center gap-16 '>
                    <div className="flex items-center flex-col lg:mx-0  gap-6 ">
                        <div className=" flex  flex-col w-full items-center justify-center">
                            <div className="h-fit">
                                <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                    Case Studies
                                </div>
                            </div>
                            <div className="h-fit text-h4  block sm:text-h2 font-Satoshi-Bold uppercase">
                                <p className="text-center">Explore What We Do<span className="text-primary-500">.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full'>
                        {caseStudies.map((study, index) => (
                            <CardCase
                                key={index}
                                index={index}
                                title={study.title}
                                category={study.category}
                                description={study.description}
                                image={study.image}
                                top={'' + ((index * 20) + 100)}  // This part is updated
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy;
