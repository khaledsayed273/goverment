import React from 'react'
import Header from './components/Header'
import Image from 'next/image'
import cover from "../../public/images/cover.jpeg"

function notFound() {
    return (
        <>
            <main className='h-[600px] md:h-[800px] xl:h-screen w-full relative text-white'>
                <Image priority sizes='(max-width:992px) , 100vw' src={cover} fill alt='cover' />
                <div className="absolute w-full h-full left-0 top-0 bg-black/80 flex justify-center items-center">
                    <h1 className='capitalize bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text font-bold text-xl md:text-2xl lg:text-4xl'>sorry this page is not found</h1>
                </div>
            </main>
        </>
    )
}

export default notFound
