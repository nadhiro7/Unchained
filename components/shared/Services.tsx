import React from 'react'
import Service from '../card/Service';
import { services } from '@/consts/const';

function Services() {
    return (
        <div className='flex items-center flex-col'>
            <div className='w-full h-max  relative overflow-hidden flex flex-col justify-center items-center gap-16 py-[120px]'>
                <div className="flex items-center flex-col w-[861px] mx-[19px] lg:mx-0  gap-6 ">
                    <div className=" flex  flex-col w-full items-center justify-center">
                        <div className="h-fit text-h4  block sm:text-h1 font-Satoshi-Bold uppercase">
                            <p className="text-center">Explore What We Do<span className="text-primary-500">.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div >  {/* This part is updated */}
                <div className='container'>
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
