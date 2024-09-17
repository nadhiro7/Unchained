import React from 'react'

function Ref({ text, author }: { text: string, author: string }) {
    return (
        <div className='flex gap-5'>
            <div className='bg-primary-500 h-auto w-[2px]' />
            <div>
                <p className='text-quote font-Satoshi-Italic text-white opacity-70'>
                    {text}
                </p>
                <p className='text-body-regular font-Satoshi-Regular text-primary-500'>
                    {author}
                </p>
            </div>
        </div>
    )
}

export default Ref