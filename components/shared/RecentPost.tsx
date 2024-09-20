import { recentPosts } from '@/consts/const'
import React from 'react'

function RecentPost() {
    return (
        <div className='flex flex-col gap-7 order-2 md:order-1 md:w-[50%] w-full xl:w-full'>
            <h3 className="text-h4 font-Satoshi-Bold uppercase">Recent Posts
                <span className="text-primary-500">.</span>
            </h3>
            <div className='flex flex-col gap-4'>
                {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <img src={post.image}
                            alt="post"
                            className="w-[112px] h-[112px] object-cover rounded-[16px]"
                        />
                        <div className='w-[244px]'>
                            <h4 className="text-body-bold font-Satoshi-Bold">{post.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentPost