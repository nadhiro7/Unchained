import React from 'react'
import Service from '../card/Service';
import { services } from '@/consts/const';

function Services() {
    return (
        <div className='flex items-center flex-col py-[120px] container'>
            <div className='w-full h-max  relative overflow-hidden flex flex-col justify-center items-center gap-16'>
                <div className="flex items-center flex-col  lg:mx-0  gap-6 ">
                    <div className=" flex  flex-col w-full items-center justify-center">
                        <div className="h-fit text-h4  block sm:text-h1 font-Satoshi-Bold uppercase">
                            <p className="text-center">Explore What We Do<span className="text-primary-500">.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full'>
                    {services.map((study, index) => (
                        <Service
                            key={index}
                            index={index}
                            title={study.title}
                            description={study.description}
                            image={study.image}
                            top={'' + ((index * 20) + 100)}  // This part is updated
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
