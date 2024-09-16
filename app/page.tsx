import Banner from "@/components/shared/Banner";
import CaseStudy from "@/components/shared/CaseStudy";
import Excited from "@/components/shared/Excited";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Partner from "@/components/shared/Partner";
import Partners2 from "@/components/shared/Partners2";
import WorkProcess from "@/components/shared/WorkProcess";
import Wwb from "@/components/shared/Wwb";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white  mxWidth">
      <div className="container mxWidth ">
        <HeroSection>
          <div className="flex items-center flex-col w-[723px] mx-[19px] lg:mx-0  gap-6 ">
            <div className=" flex  flex-col w-full items-center justify-center" >
              <div className="overflow-hidden h-fit">
                <div className="translateTopScroll glassmorphism text-eyebrow font-Satoshi-Medium text-primary-500 border-[1px] border-solid border-[#72717133] rounded-[32px] py-2 px-4 w-fit">
                  Technology
                </div>
              </div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className="translateTopScroll">We are</p></div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className="translateTopScroll flex flex-wrap justify-center items-center"><span className="sm:hidden block"><img src="/assets/22.svg" alt="11img" /></span> digital<span className="sm:hidden block"><img src="/assets/11.svg" alt="12img" /></span>  <span className="hidden sm:block"><img src="/assets/2.svg" alt="2img" /></span> products</p></div>
              <div className="overflow-hidden h-fit text-h3 sm:text-display font-Satoshi-Bold uppercase"><p className=" translateTopScroll flex justify-center items-center"><span className="hidden sm:block"><img src="/assets/1.svg" alt="1img" /></span> creators<span className="text-primary-500">.</span></p></div>
            </div>
            <div className="overflow-hidden h-fit">
              <p className="translateTopScroll text-center font-Satoshi-Regular text-body-regular opacity-60">Whatever your unique idea or needs, we’ve got the tools and know how to build your custom solution from discovery to deployment.</p>
            </div>
            <div className="w-full xs:w-fit  overflow-hidden  flex flex-col lg:flex-row gap-3 items-center justify-center">
              <button className="btn translateRightScroll shadow-btn transition-all transform duration-700 bg-primary-500 w-full xs:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500">Book a meeting</button>
              <button className="btn translateLeftScroll shadow-btn transition-all transform duration-700 bg-transparent w-full xs:w-[320px] lg:w-[219px] 2xl:w-[204px]  h-[76px]  rounded-[44px] px-4 py-3 text-button-large-size font-Satoshi-Medium  border-[1px] border-solid border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500">Learn more</button>
            </div>
          </div>
          <></>
        </HeroSection>
        <Partner />
      </div>
      <div className="h-[243px] relative overflow-hidden">
        <Banner rotateLeft={true} />
        <Banner rotateRight={true} />
      </div>
      <Wwb />
      <CaseStudy />
      <WorkProcess />
      <Partners2 />
      <Excited />
      <Footer />
    </div>
  );
}
