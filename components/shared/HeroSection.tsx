import React, { Children } from 'react'

function HeroSection({
    children,
    height,
    style = ''
}: Readonly<{
    children: React.ReactNode;
    height: string;
    style: string

}>) {
    return (
        <div className={`w-full hero relative overflow-hidden flex flex-col items-center justify-between ${height}`}>
            <div className='gridDesk absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] 2xl:h-[825px] lg:h-[80%]'>
            </div>
            <div className={`lg:hidden gridMobile absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] bg-cover lg:h-[80%]  ${style}`}>
            </div>
            {children}
        </div>
    )
}

export default HeroSection