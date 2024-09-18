'use client'
import React, { useEffect, useRef, useState } from 'react'

function CardCase({ title, category, description, image, index, top }: {
    title: string;
    category: string;
    description: string;
    image: string;
    index: number;
    top: string
}) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    // const s: string = '' + (index * 20) + 100;
    // const [top, setTop] = useState<String>('');	// This part is updated	
    // Check if the card is visible in the viewport
    useEffect(() => {
        const handleScroll = () => {
            const rect = cardRef.current?.getBoundingClientRect();
            if (rect && rect.top < window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`w-full px-2  flex lg:flex-row flex-col justify-between py-5 gap-4 lg:pl-[108px] h-max lg:h-[400px] rounded-[32px] mb-7 items-center card-case  transition-transform duration-700 ease-in-out
            ${isVisible ? ' opacity-100' : ''} translate-y-[100px] sticky top${index}`}
        >
            <div className='lg:w-[482px]'>
                <div className='h-fit'>
                    <div className="text-eyebrow lg:text-body-medium font-Satoshi-Medium text-primary-500 w-fit">
                        {category}
                    </div>
                </div>
                <div className='h-fit text-h4 block sm:text-h3 font-Satoshi-Bold uppercase'>
                    <p>{title}<span className='text-primary-500'>.</span></p>
                </div>
                <div className='h-fit'>
                    <p className='font-Satoshi-Regular text-body-regular opacity-60'>{description}</p>
                </div>
            </div>
            <div className='h-full w-[360px]'>
                <img src={image} alt={title} className='w-full h-full rounded-[24px]' />
            </div>
        </div>
    )
}

export default CardCase;
