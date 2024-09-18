import React from 'react'

function Partners2() {
    return (
        <section className='container mxWidth flex flex-col xl:flex-row gap-12 xl:gap-0  justify-between lg:flex-nowrap py-20'>
            <div className="flex justify-between flex-col sm:flex-row xl:flex-col lg:mx-0 w-full  xl:w-fit gap-6 ">
                <div className="w-max flex flex-col justify-center">
                    <div className="h-fit">
                        <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                            Our partners
                        </div>
                    </div>
                    <div className="text-[28px] text-wrap lg:text-h2 flex font-Satoshi-Bold  flex-wrap uppercase flex-col w-full">
                        <div className='flex gap-2'>We work with <img className='hidden lg:block' src="/assets/1.svg" alt="2img" /> <img className='lg:hidden block' src="/assets/22.svg" alt="2img" /></div>
                        <div className='flex gap-2 flex-wrap flex-col sm:flex-row'>
                            brands in<div className='lg:h-[55px] h-[36px] overflow-hidden'>
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
                <div className="w-full md:w-fit  overflow-hidden  flex flex-col lg:flex-row gap-3 items-center justify-center">
                    <button className="btn shadow-btn transition-all transform duration-700 bg-primary-500 w-full md:w-[165px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500">Book a call</button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center w-full xl:w-[426.24px] opacity-40'>
                <img src='/assets/bb1.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb2.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb3.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb4.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb5.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb6.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
                <img src='/assets/bb7.png' className='w-[132px] xl:w-[132px] lg:w-[219px]' alt='partners' />
            </div>
        </section>
    )
}

export default Partners2