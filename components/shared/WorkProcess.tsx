import React from 'react'
import CardProcess from '../card/CardProcess'
import { processes } from '@/consts/const'

function WorkProcess() {
    return (
        <section className='flex items-center flex-col container mxWidth process duration-700 transform py-20'>
            <div className='w-full h-max  relative overflow-hidden flex flex-col justify-center items-center gap-16 py-[120px]'>
                <div className="flex items-center flex-col mx-[19px] lg:mx-0  gap-6 ">
                    <div className=" flex  flex-col w-full items-center justify-center">
                        <div className="h-fit">
                            <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                Our work process
                            </div>
                        </div>
                        <div className="h-fit text-h4 text-wrap text-center w-full sm:text-h2  block font-Satoshi-Bold uppercase">
                            Our Essential Process<span className="text-primary-500">.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-5 duration-700 h-max'>
                {processes.map((process, index) => (
                    <CardProcess
                        key={index}
                        index={index + 1}
                        title={process.title}
                        description={process.description}
                    />
                ))
                }
            </div>
        </section>
    )
}

export default WorkProcess