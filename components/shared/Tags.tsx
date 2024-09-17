import { tags } from '@/consts/const'
import React from 'react'

function Tags() {
    return (
        <div className='flex flex-col gap-7 order-1 md:order-2'>
            <h3 className="text-h4 font-Satoshi-Bold uppercase">Tags
                <span className="text-primary-500">.</span>
            </h3>
            <div className="w-[365px]  flex lg:flex-row gap-3 flex-wrap  duration-700 max-w-[570px]">
                {tags.map((category, index) => (
                    <div key={index} className="cat text-body-regular font-Satoshi-Regular btn hover:bg-primary-500 duration-700 text-gray-200 hover:text-white  border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-3 w-fit flex gap-2 cursor-pointer">
                        {category}
                        <img className='cat-img duration-700' src={`/assets/sahem.svg`} alt={`${category}`} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Tags