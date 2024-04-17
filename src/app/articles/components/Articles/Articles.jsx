"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


function Articles({ data }) {

    const [limit, setLimit] = useState(6)





    const handleShowMore = () => {
        setLimit(limit + 6)
    }

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 my-7">
                {
                    data?.slice(0, limit).map((item) => (

                        <div className='bg-white p-3 lg:p-4 rounded-[40px] shadow-lg' key={item.id}>
                            <div className="relative w-full h-[250px] overflow-hidden rounded-t-3xl">
                                <Image sizes="(max-width:992px) , 100vw" fill src={item.image} alt={item.name} />
                            </div>
                            <div className='flex flex-col my-4 px-2'>
                                <h1 className='text-[#01579B] font-semibold text-base md:text-xl'>{item.name}</h1>
                                <div className='mt-5 flex justify-between items-center'>
                                    <p className='text-[#01579B] font-semibold text-sm'>{item.date}</p>
                                    <Link target='_blank' href={item.slug}>
                                        <div className='bg-[#E7F2FF]  rounded-full w-9 h-9 flex justify-center items-center'>
                                            <svg width="8" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.72858 1.58128L1.78572 8.267L7.72858 14.9527" stroke="#01579B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>

                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))
                }


            </div>

            {data.length > limit && (
                <div className='flex justify-center items-end '>
                    <button onClick={handleShowMore} className='bg-gradient-to-r mt-7 mb-5 from-[#0061FF] to-[#3c939c] rounded-full py-2 px-7 flex justify-between items-center'>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 7.93536L15.2232 7.79851M10.1182 1.41132L16.6412 7.9343L9.98677 14.5887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                        </svg>
                        <span className='ms-2 text-white font-bold text-xl font-serif'>اقرا المزيد</span>

                    </button>
                </div>
            )}

        </>
    )
}

export default Articles
