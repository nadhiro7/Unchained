import React from 'react'

function Partner() {
    return (
        <div className=' mxWidthHome minWidth mx-auto relative overflow-hidden flex justify-center items-center flex-col gap-4 py-10'>
            <div className='flex flex-col items-center'>
                <div className="glassmorphism  text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                    Our partners
                </div>
                <div className="text-h4  text-center font-Satoshi-Bold uppercase">Our partners in success<span className='text-primary-500'>.</span></div>
            </div>
            {/* create div to print our partners with animation */}

            <div className='partnerRoot'>
                <div className='flex flex-col items-center gap-6 mt-6 partners scroll-mobile xs:scroll-desktop'>
                    <div className='flex gap-10'>
                        <img src='/assets/b2.svg' alt='partner' />
                        <img src='/assets/b2.svg' alt='partner' />
                        <img src='/assets/b1.svg' alt='partner' />
                        <img src='/assets/b1.svg' alt='partner' />
                        <img src='/assets/b3.svg' alt='partner' />
                        <img src='/assets/b3.svg' alt='partner' />
                        <img src='/assets/b4.svg' alt='partner' />
                        <img src='/assets/b4.svg' alt='partner' />
                        <img src='/assets/b5.svg' alt='partner' />
                        <img src='/assets/b5.svg' alt='partner' />
                        <img src='/assets/b6.svg' alt='partner' />
                        <img src='/assets/b6.svg' alt='partner' />
                        <img src='/assets/b7.svg' alt='partner' />
                        <img src='/assets/b7.svg' alt='partner' />
                        <img src='/assets/b2.svg' alt='partner' />
                        <img src='/assets/b2.svg' alt='partner' />
                        <img src='/assets/b1.svg' alt='partner' />
                        <img src='/assets/b1.svg' alt='partner' />
                        <img src='/assets/b3.svg' alt='partner' />
                        <img src='/assets/b3.svg' alt='partner' />
                        <img src='/assets/b4.svg' alt='partner' />
                        <img src='/assets/b4.svg' alt='partner' />
                        <img src='/assets/b5.svg' alt='partner' />
                        <img src='/assets/b5.svg' alt='partner' />
                        <img src='/assets/b6.svg' alt='partner' />
                        <img src='/assets/b6.svg' alt='partner' />
                        <img src='/assets/b7.svg' alt='partner' />
                        <img src='/assets/b7.svg' alt='partner' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Partner
