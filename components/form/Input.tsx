import React from 'react'

function Input() {
    return (
        <div className='relative w-full py-2 pr-2 pl-9 sm:w-[580px] input h-[88px] rounded-[48px] flex justify-center items-center'>
            <input type="text" className=" h-[88px] w-full px-2 py-2 bg-transparent border-none outline-none text-base text-white placeholder-opacity-60 opacity-60 placeholder-white appearance-none focus:outline-none focus:shadow-outline" placeholder="Enter your email to get Essential News in your inbox..." />
            <button className='btn w-[136px] transition-all transform duration-500 bg-primary-500 contact-btn h-[72px] rounded-[44px] px-4 py-3 text-button-medium-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500'>Sign up</button>

        </div>
    )
}

export default Input