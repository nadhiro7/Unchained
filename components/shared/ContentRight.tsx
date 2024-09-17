import React from 'react'
import RecentPost from './RecentPost'
import Tags from './Tags'

function ContentRight() {
    return (
        <div className='flex flex-col w-full xl:w-[420px] gap-6 md:flex-row xl:flex-col'>
            <RecentPost />
            <Tags />
        </div>
    )
}

export default ContentRight