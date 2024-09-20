import React from 'react'
import Content from './Content'
import ContentRight from './ContentRight'

function Post() {
    return (
        <section className='container mxWidthHome mx-auto flex gap-14 flex-col py-20 px-10 xl:px-[120px]'>
            <img src="/assets/post.png" alt="post" className='w-full object-cover rounded-[32px] h-[280px] lg:h-[400px]' />
            <div className='flex flex-col lg:flex-row justify-between flex-wrap gap-[76px] xl:gap-0'>
                <Content />
                <ContentRight />
            </div>
        </section>
    )
}

export default Post