import { categories } from '@/consts/const'
import React from 'react'

function Banner({ rotateLeft = false, rotateRight = false }) {
    return (
        <div className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-primary-500 flex banner overflow-hidden py-6 px-5 ${rotateLeft ? 'rotate-[5deg]' : ''} ${rotateRight ? 'rotate-[-5deg]' : ''}`}>
            <div className={`flex gap-5  ${rotateLeft ? 'scroll3' : 'scroll2'}`}>
                {categories.map((category, index) => (
                    <p key={index} className='w-max relative text-h4 font-Satoshi-Bold overflow-hidden items-center text-nowrap  flex gap-5'>
                        {category}

                        <img className='w-[36px] h-[36px]' src={`/assets/star.svg`} alt={`${category}`} />
                    </p>

                ))}
                {categories.map((category, index) => (
                    <p key={index} className='w-max relative text-h4 font-Satoshi-Bold overflow-hidden items-center text-nowrap  flex gap-5'>
                        {category}

                        <img className='w-[36px] h-[36px]' src={`/assets/star.svg`} alt={`${category}`} />
                    </p>

                ))}
            </div>
        </div>
    )
}

export default Banner