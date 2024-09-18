import Link from 'next/link'
import React from 'react'

function PortfolioCard(
    // This is a prop
    { title, description, imgSrc, imgAlt, link, category }
        : { title: string, description: string, imgSrc: string, imgAlt: string, link: string, category: string }
) {
    return (
        <div className='portfolio-card flex p-5 gap-5 rounded-[32px] flex-col w-full  lg:w-[460px] xl:w-[590px] border-[1px] border-solid border-[#72717133] glassmorphism'>
            <img src={imgSrc} alt={imgAlt} className='rounded-[32px] h-[340px]' />
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <h3 className='text-white text-h4 font-Satoshi-Bold'>{title}</h3>
                    <Link className="cat text-body-regular font-Satoshi-Regular btn hover:bg-primary-500 duration-700 text-gray-200 hover:text-white  border-[1px] border-solid border-[#72717133] rounded-[32px] py-3 px-2 w-max flex gap-2 cursor-pointer" href={link}>
                        {category}
                        <img className='cat-img duration-700' src={`/assets/sahem.svg`} alt={`${category}`} />
                    </Link>
                </div>
                <p className='text-white opacity-70  text-body-regular font-Satoshi-Regular'>{description}</p>

            </div>
        </div>
    )
}

export default PortfolioCard