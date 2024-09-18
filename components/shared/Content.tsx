import React from 'react'
import Ref from './Ref'

function Content() {
    return (
        <div className='flex flex-col w-full xl:w-[50%] gap-6'>
            <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                I’m baby direct trade cliche cloud bread hammock kinfolk deep v. Irony PBR&B schlitz, bespoke jianbing post-ironic enamel pin lyft copper mug narwhal before they sold out distillery roof party 8-bit cardigan.
            </p>
            <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                I’m baby direct trade cliche cloud bread hammock kinfolk deep v. Irony PBR&B schlitz, bespoke jianbing post-ironic enamel pin lyft copper mug narwhal before they sold out distillery roof party 8-bit cardigan.
            </p>
            <Ref text='Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.' author='Socrates' />
            <p className='sm:text-h4 text-[24px] font-Satoshi-Bold text-white uppercase '>
                What You Need to Know about the Facebook Product Design Interview and What to do about it<span className=' text-primary-500 '>.</span>
            </p>
            <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                Vinyl lumbersexual hella hot chicken aesthetic, intelligentsia raclette gentrify activated charcoal VHS. Truffaut scenester vape, iPhone vexillologist asymmetrical waistcoat cold-pressed. Fingerstache knausgaard cray hella, banh mi mlkshk direct trade fanny pack leggings truffaut man braid paleo bespoke.
            </p>
            <div className='flex flex-col gap-5'>
                <p className='sm:text-h4 text-[24px] font-Satoshi-Bold text-white uppercase'>
                    A checklist to improve your daily routine<span className=' text-primary-500 '>.</span>
                </p>
                <p className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                    Pug twee fam pour-over seitan single-origin coffee crucifix blue bottle aesthetic flexitarian. Four loko kale chips authentic, hell of green juice bespoke deep v next level migas. Woke bushwick prism live-edge austin tote bag.
                </p>
                <ul className='flex flex-col gap-5 ulList'>
                    <li className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        <div className='pl-4'>
                            Polaroid artisan tattooed, kale chips cloud bread crucifix yuccie irony.
                        </div>
                    </li>
                    <li className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        <div className='pl-4'>
                            Fashion axe pabst microdosing, locavore cornhole craft beer authentic hoodie.
                        </div>
                    </li>
                    <li className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        <div className='pl-4'>
                            Glossier offal brooklyn typewriter VHS cred gentrify.
                        </div>
                    </li>
                    <li className='text-body-regular font-Satoshi-Regular text-white opacity-70'>
                        <div className='pl-4'>
                            Direct trade green juice portland crucifix.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Content