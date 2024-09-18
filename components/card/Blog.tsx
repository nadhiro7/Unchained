import Link from 'next/link'
import React from 'react'


function Blog({
    category,
    title,
    description,
    date,
    image,
    author
}: {
    category: string,
    title: string,
    description: string,
    date: string,
    image: string,
    author: string
}) {
    return (
        <div className='w-full flex flex-col lg:flex-row gap-[52px]'>
            <img src={image} className='w-full h-[280px] lg:h-[380px] lg:w-[50%]' alt={title} />
            <div className='flex justify-center flex-col gap-5 w-full lg:w-[50%]'>
                <div className='flex flex-col items-center'>
                    <div className="text-eyebrow lg:text-body-medium font-Satoshi-Medium text-primary-500 w-fit">
                        {category}
                    </div>
                    <div className='h-fit text-center lg:text-start text-h4 block sm:text-h4 font-Satoshi-Bold uppercase'>
                        {title}
                    </div>
                </div>
                <div className='h-fit'>
                    <p className='font-Satoshi-Regular text-center lg:text-start text-body-regular opacity-60'>{description}</p>
                </div>
                <div className='flex justify-between items-center flex-col lg:flex-row gap-5'>
                    <Link href={'blog/post1'} className='btn w-full lg:w-[164px] flex justify-center items-center transition-all transform duration-500 bg-primary-500 contact-btn h-[72px] rounded-[44px] px-4 py-3 text-button-medium-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500'>Read more</Link>
                    <div className='flex items-center gap-2 text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        <p>{date}</p>
                        <p>.</p>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog