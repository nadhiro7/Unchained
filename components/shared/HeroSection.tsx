import React, { Children } from 'react'

function HeroSection({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-full h-screen hero relative overflow-hidden flex justify-center items-center'>
            <div className='gridDesk absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] 2xl:h-[825px] lg:h-[80%]'>
            </div>
            <div className='lg:hidden gridMobile absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]  lg:h-[80%]'>
            </div>
            {children}
        </div>
    )
}

export default HeroSection