import React from 'react'
import PersonCard from '../card/PersonCard'
import { team } from '@/consts/const'

function MeetTeam() {
    return (
        <section className='container mxWidthHome mx-auto pt-[120px] pb-[40px] flex-col flex justify-center items-center gap-16'>
            <div className="flex items-center flex-col mx-[19px] w-full lg:w-[723px] lg:mx-0  gap-6 ">
                <div className=" flex  flex-col w-full items-center justify-center" >
                    <div className="overflow-hidden h-fit">
                        <div className="glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                            Meet our team
                        </div>
                    </div>
                    <div className="overflow-hidden text-wrap h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase text-center"> Meet with our awsome team<span className="text-primary-500">.</span></div>
                </div>
                <div className="overflow-hidden h-fit">
                    <p className="text-center font-Satoshi-Regular text-body-regular opacity-60">Our team of digital product creators in tech and design bring skills above and beyond the ordinary to every project. User experience, Web Applications, Mobile Applications, and Business Platforms.</p>
                </div>
            </div>
            <div className='w-full overflow-x-scroll cat-imgs2 '>
                <div className='flex w-max gap-5 lg:w-full'>
                    {/* <!-- Person Card --> */}
                    {team.map((person, index) => (
                        <PersonCard key={index} name={person.name} role={person.role} image={person.image} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetTeam