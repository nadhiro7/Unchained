import React from 'react'

function CardProcess(
    { index, title, description }: {
        index: number;
        title: string;
        description: string;
    }
) {
    return (
        <div>
            <div className="flex flex-col w-full sm:w-[462px] h-[372px] overflow-hidden hover:h-max duration-700 transform lg:mx-0 p-6 rounded-[32px] gap-3  process-card glassmorphism">
                <div className="text-body-medium border-[#FFFFFF33] flex  items-center justify-center font-Satoshi-Medium h-[64px] w-[64px] text-white border-[1px] border-solid rounded-[32px] py-2 px-4 bg-primary-500">
                    <div className="h-[64px] flex  items-center">
                        0{index}
                    </div>
                </div>
                <div className=" flex gap-2 flex-col w-full items-start justify-center duration-700 transform ">
                    <div className="h-fit duration-700 transform  block text-h4 font-Satoshi-Bold uppercase">
                        <p className="">{title}</p>
                    </div>
                    <div className="h-fit duration-700 transform  text-body-regular font-Satoshi-Regular opacity-70 uppercase">
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProcess