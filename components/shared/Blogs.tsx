import React from 'react'
import Blog from '../card/Blog'
import { blogs } from '@/consts/const'

function Blogs() {
    return (
        <section className='container mxWidthHome mx-auto flex flex-col items-center gap-14'>
            <div>
                <div className='flex flex-col gap-16'>
                    {blogs.map((blog, index) => (
                        <Blog
                            key={index}
                            category={blog.category}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            image={blog.image}
                            author={blog.author}
                        />
                    ))}
                </div>
            </div>
            <button className="btn translateLeftScroll shadow-btn transition-all transform duration-700 bg-transparent w-full xs:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500">View more</button>

        </section>
    )
}

export default Blogs