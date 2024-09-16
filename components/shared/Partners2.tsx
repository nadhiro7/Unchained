import React from 'react'

function Partners2() {
    return (
        <section className='container mxWidth flex flex-col lg:flex-row  justify-between lg:flex-nowrap py-20'>
            <div className="flex justify-between flex-col sm:flex-row lg:flex-col lg:mx-0 w-full lg:w-fit gap-6 ">
                <div className="w-max flex flex-col justify-center">
                    <div className="h-fit">
                        <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                            Our partners
                        </div>
                    </div>
                    <div className="text-[28px] text-wrap lg:text-h2 flex font-Satoshi-Bold  flex-wrap uppercase flex-col w-full">
                        <div className='flex gap-2'>We work with <img className='hidden lg:block' src="/assets/1.svg" alt="2img" /> <img className='lg:hidden block' src="/assets/22.svg" alt="2img" /></div>
                        <div className='flex gap-2 flex-wrap flex-col sm:flex-row'>
                            the best brands in<div className='lg:h-[55px] h-[36px] overflow-hidden'>
                                <div className="text-primary-500 flex flex-col justify-start transformAnimation">
                                    <p>BUSINESS</p>
                                    <p>HEALTHCARE</p>
                                    <p>TECH</p>
                                    <p>REAL ESTATE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xs:w-fit  overflow-hidden  flex flex-col lg:flex-row gap-3 items-center justify-center">
                    <button className="btn shadow-btn transition-all transform duration-700 bg-primary-500 w-full sm:w-[165px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500">Book a call</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                <img src='/assets/b1.svg' alt='partners' />
                <img src='/assets/b2.svg' alt='partners' />
                <img src='/assets/b3.svg' alt='partners' />
                <img src='/assets/b4.svg' alt='partners' />
                <img src='/assets/b5.svg' alt='partners' />
                <img src='/assets/b6.svg' alt='partners' />
                <img src='/assets/b7.svg' alt='partners' />
            </div>
        </section>
    )
}

export default Partners2