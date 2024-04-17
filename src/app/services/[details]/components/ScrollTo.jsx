"use client"
import React from 'react'

function ScrollTo() {
    return (
        <div className='mx-auto  flex flex-col justify-center items-center absolute left-1/2 -translate-x-1/2 bottom-3'>
            <span className='text-xl md:text-2xl font-bold'>هيا معنا</span>
            <svg onClick={() => scrollTo({
                top: 900,
                behavior: "smooth"
            })} className='w-[40px] animate-bounce mt-5 cursor-pointer' viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.6621 61C23.627 60.9939 16.8102 58.5566 11.3661 54.1008C5.92196 49.6451 2.18505 43.4447 0.788163 36.5497C-0.608724 29.6547 0.420267 22.4888 3.70089 16.2655C6.98151 10.0421 12.3121 5.14381 18.7901 2.40002C26.2181 -0.616 34.5348 -0.58696 41.9416 2.48086C49.3484 5.54868 55.25 11.4087 58.3701 18.7936C61.4902 26.1786 61.5779 34.4949 58.6145 41.944C55.651 49.3932 49.8745 55.3765 42.5341 58.6C38.7786 60.1907 34.7406 61.007 30.6621 61ZM18.4391 20.755L13.4221 25.655L30.2621 42.1L47.1031 25.65L42.0861 20.75L30.2621 32.3L18.4391 20.755Z" fill="white" />
            </svg>
        </div>
    )
}

export default ScrollTo
