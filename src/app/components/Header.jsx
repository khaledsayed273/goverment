import Image from 'next/image'
import React from 'react'
import ScrollTo from '../services/[details]/components/ScrollTo'

function Header({ title, img, about }) {

    const defaultAbout = `
تعرف على أقدم كوبري سكة حديد معدني في العالم الذي يفتح بشكل دائري حول محور الارتكاز،
وهو واحد من أوائل الكباري الحديثة في العالم التي صممت لعبور قطارات السكك الحديدية.
`;


    return (
        <header className='h-[600px] md:h-[800px] xl:h-screen w-full relative text-white'>
            <Image priority sizes='(max-width:992px) , 100vw' src={img} fill alt='cover' />
            <div className="absolute w-full h-full left-0 top-0 bg-[#14274A]/60">
            </div>
            <div className={`absolute  z-40 w-full h-full md:h-[80%] left-0 bottom-0 p-10  ${title && "md:mb-10 lg:mb-0"}`}>
                <div className="container mx-auto h-full ">
                    <div className={`flex flex-col justify-center  ${title ? "lg:justify-start" : "md:justify-start"} items-center md:items-start h-full md:px-20`}>
                        {title ? (<h1 className='text-lg md:text-2xl xl:text-3xl text-center lg:text-start  font-semibold leading-8 md:leading-[60px] lg:leading-[55px] xl:leading-[55px] lg:w-2/3'>{title}</h1>) : (
                            <>
                                <div className='text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-normal'>
                                    مرحبا بكم فى
                                </div>
                                <div className='flex flex-col items-center md:ms-10 font-semibold'>
                                    <div className='text-4xl md:text-6xl lg:text-8xl  my-5 '>
                                        كوبرى دمياط
                                    </div>
                                    <div className='text-3xl    md:text-5xl lg:text-6xl '>
                                        الحضاري
                                    </div>
                                </div>
                            </>
                        )}
                        <p className={`mt-10 font-medium  xl:leading-9  hidden ${about ? "lg:block lg:w-11/12 lg:text-xl" : "md:block lg:w-1/2 lg:text-2xl"} `}>
                            {about ? about : defaultAbout}
                        </p>
                    </div>
                    <ScrollTo />
                </div>
            </div>
        </header>
    )
}

export default Header
