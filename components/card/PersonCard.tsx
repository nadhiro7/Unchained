import React from 'react'

function PersonCard({
    name,
    role,
    image
}: {
    name: string,
    role: string,
    image: string
}) {
    return (
        <div className='w-[284px] h-[420px] sm:w-[300px] lg:basis-[25%]  relative person-card'>
            <img src={image} alt={name} className="w-[284px] sm:w-full lg:w-full h-[340px]" />
            <div className="flex items-center flex-col mx-[19px] lg:mx-0  gap-6 absolute person-det">
                <div className=" flex  flex-col w-full items-center justify-center" >
                    <div className="overflow-hidden h-fit text-h4 font-Satoshi-Bold uppercase text-center"> {name}</div>
                    <div className="overflow-hidden h-fit">
                        <div className="text-body-medium font-Satoshi-Medium text-primary-500">
                            {role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonCard