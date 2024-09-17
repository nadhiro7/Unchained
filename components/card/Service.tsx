'use client'
import React, { useEffect, useRef, useState } from 'react'

function Service({ title, description, image, index, top }: {
    title: string;
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
            className={`w-full px-5  flex lg:flex-row flex-col justify-between py-5 gap-4  h-max lg:h-[400px] rounded-[32px] mb-7 items-center service-card  transition-transform duration-700 ease-in-out
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100px]'} sticky top${index}`}
        >
            <div className={`lg:w-[482px] ${index % 2 == 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className='h-fit text-h4 block font-Satoshi-Bold uppercase'>
                    <p>{title}</p>
                </div>
                <div className='h-fit'>
                    <p className='font-Satoshi-Regular text-body-regular opacity-60'>{description}</p>
                </div>
            </div>
            <div className={`h-full w-[360px] ${index % 2 == 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img src={image} alt={title} className='w-full h-full rounded-[24px]' />
            </div>
        </div>
    )
}

export default Service;
