import { categories } from '@/consts/const'
import React from 'react'

function Case() {
    return (
        <section className='container mxWidthHome mx-auto py-20 flex flex-col gap-16 '>
            <img src="/assets/portfolio.png" alt="post" className='w-full h-[280px] lg:h-[572px]  rounded-[40px]' />
            <div className='flex flex-wrap '>
                <div className='w-full flex gap-8 flex-col mb-8 md:w-[50%]'>
                    <h4 className='text-h4 font-Satoshi-Bold w-full uppercase text-white'>Seamless Trade Connections: Introducing My Trade Shop's All-in-One Mobile App for Companies and Customers</h4>
                    <button className='btn w-full md:w-[164px] flex justify-center items-center transition-all transform duration-500 bg-primary-500 contact-btn h-[72px] rounded-[44px] px-4 py-3 text-button-medium-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500'>Read more</button>
                </div>
                <div className='w-full flex gap-8 flex-col  md:w-[50%]'>
                    <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        My Trade Shop is an all-in-one mobile application that facilitates connections between trades companies and customers. Companies can create a business profile, increasing visibility for potential customers to find them. In turn, customers can efficiently search for and hire specific tradespeople in their community.
                    </p>
                    <div className="w-full  flex flex-row gap-3 flex-wrap duration-700">
                        {categories.map((category, index) => (
                            <div key={index} className="cat text-body-regular font-Satoshi-Regular btn hover:bg-primary-500 duration-700 text-gray-200 hover:text-white  border-[1px] border-solid border-[#72717133] rounded-[32px] py-3 px-2 w-max flex gap-2 cursor-pointer">
                                {category}
                                <img className='cat-img duration-700' src={`/assets/sahem.svg`} alt={`${category}`} />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full items-center flex flex-col gap-12'>
                <div className="flex items-center flex-col  lg:mx-0  gap-6 ">
                    <div className=" flex  flex-col w-full items-center justify-center" >
                        <div className="overflow-hidden h-fit">
                            <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                                What we solve ?
                            </div>
                        </div>
                        <div className=" h-fit text-h4 text-wrap sm:text-h2 font-Satoshi-Bold uppercase text-center"> We are problem <br /> solvers<span className="text-primary-500">.</span></div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5'>
                    <div className='w-full flex gap-4 flex-col  md:w-[48%]'>
                        <div className="overflow-hidden h-fit text-h4  font-Satoshi-Bold uppercase text-center md:text-start">Challenge<span className="text-primary-500">.</span></div>

                        <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                            Efficiently locating, booking, and managing tradespeople has long been a challenge. What if we could develop a platform akin to Uber, specifically tailored for tradespeople, enabling seamless job assignment, booking, communication, and real-time tracking of their location and time spent away from the service location?                        </p>
                    </div>
                    <div className='w-full flex gap-4 flex-col  md:w-[48%]'>
                        <div className="overflow-hidden h-fit text-h4  font-Satoshi-Bold uppercase text-center md:text-start">Solution<span className="text-primary-500">.</span></div>

                        <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                            Introducing My Trade Shop, an unparalleled platform surpassing traditional Marketplaces and Craigslist. With real-time location tracking and seamless communication, My Trade Shop enables effortless discovery of tradespeople in your service area. Effortlessly connect, bid, negotiate, and rate services for future customers with just a press of a button. Experience fast and user-friendly access to trade solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-5'>
                <img src="/assets/work1.png" alt="work" className='w-full object-cover h-[280px] lg:h-[400px] lg:w-[462px] xl:w-[590px]  rounded-[40px]' />
                <img src="/assets/work2.png" alt="work" className='w-full object-cover h-[280px] lg:h-[400px] lg:w-[462px] xl:w-[590px] rounded-[40px]' />
                <img src="/assets/work3.png" alt="work" className='w-full object-cover h-[280px] lg:h-[400px] lg:w-[462px] xl:w-[590px] rounded-[40px]' />
                <img src="/assets/work4.png" alt="work" className='w-full object-cover h-[280px] lg:h-[400px] lg:w-[462px] xl:w-[590px] rounded-[40px]' />

            </div>
        </section>
    )
}

export default Case