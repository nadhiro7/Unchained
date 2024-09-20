'use client'
import Banner from "@/components/shared/Banner";
import CaseStudy from "@/components/shared/CaseStudy";
import HeroSection from "@/components/shared/HeroSection";
import Partner from "@/components/shared/Partner";
import Partners2 from "@/components/shared/Partners2";
import WorkProcess from "@/components/shared/WorkProcess";
import Wwb from "@/components/shared/Wwb";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const rect = homeRef.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight * 0.8) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="text-white  " ref={homeRef}>
      <div className="overflow-hidden container ">
        <HeroSection height={"h-[1024px]"} style={"bg-[center]"}>
          <div className="flex items-center flex-col lg:w-[723px] ] mt-[246px] lg:mt-[356px] 2xl:mt-[360px] lg:mx-0  gap-6 ">
            <div className=" flex  flex-col w-full items-center justify-center" >
              <div className="overflow-hidden h-fit">
                <div className={`${isScroll ? 'translateTopScroll' : ''} glassmorphism duration-[2s] translate-y-full text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit`}>
                  Technology
                </div>
              </div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className={`${isScroll ? 'translateTopScroll' : ''} duration-[2s] translate-y-full`}>We are</p></div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className={`${isScroll ? 'translateTopScroll' : ''} duration-[2s] translate-y-full  flex flex-wrap justify-center items-center`}><span className="sm:hidden block"><img src="/assets/22.svg" alt="11img" /></span> digital<span className="sm:hidden block"><img src="/assets/11.svg" alt="12img" /></span>  <span className="hidden sm:block"><img src="/assets/2.svg" alt="2img" /></span> products</p></div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className={`${isScroll ? 'translateTopScroll' : ''} duration-[2s]  translate-y-full  flex justify-center items-center`}><span className="hidden sm:block"><img src="/assets/1.svg" alt="1img" /></span> creators<span className="text-primary-500">.</span></p></div>
            </div>
            <div className="overflow-hidden h-fit">
              <p className={`${isScroll ? 'translateTopScroll' : ''} duration-[2s] translate-y-full text-center font-Satoshi-Regular text-body-regular opacity-60`}>Whatever your unique idea or needs, we’ve got the tools and know how to build your custom solution from discovery to deployment.</p>
            </div>
            <div className="w-full lg:w-fit  overflow-hidden  flex flex-col lg:flex-row gap-3 items-center justify-center">
              <button className={`${isScroll ? 'translateRightScroll' : ''} duration-[2s] translate-x-[-101%] btn  shadow-btn transition-all transform  bg-primary-500 w-full md:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500`}>Book a meeting</button>
              <button className={`${isScroll ? 'translateLeftScroll' : ''} duration-[2s] translate-x-[101%] btn  shadow-btn transition-all transform  bg-transparent w-full md:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500`}>Learn more</button>
            </div>
          </div>
          <></>
        </HeroSection>
      </div>
      <Partner />

      <div className="min-h-[243px] relative overflow-hidden max-w-[1728px] w-full mx-auto  shdw">
        <Banner rotateLeft={true} />
        <Banner rotateRight={true} />
      </div>
      <Wwb />
      <CaseStudy />
      <WorkProcess />
      <Partners2 />
    </main>
  );
}
