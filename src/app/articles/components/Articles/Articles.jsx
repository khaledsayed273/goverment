"use client"
import Loading from '@/app/components/Loading'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function Articles({ url, time }) {

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(9)
    const [showLoading, setShowLoading] = useState(false)

    const getData = async (url, time, limit) => {
        try {
            const req = await fetch(`${url}/articles?limit=${limit}`, { next: { revalidate: time } })
            const res = await req.json()
            return setData(res)
        } catch (e) {

            return e
        }
    }

    useEffect(() => {
        if (data?.status) {
            setShowLoading(false)
        }
    }, [data])

    useEffect(() => {
        getData(url, time, limit)
    }, [limit , time , url])


    const handleShowMore = () => {
        setLimit((prev) => prev + 6)
        setShowLoading(true)
    }

    return (
        <>
            {data.status ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 my-7">
                    {
                        data?.data?.data?.map((item) => (
                            <div className='relative bg-white p-3 lg:p-4 rounded-[40px]  h-[440px] shadow-md shadow-black/20' key={item.id}>
                                <div className="relative w-full h-[250px] overflow-hidden rounded-t-3xl">
                                    <Image sizes="(max-width:992px) , 100vw" fill src={item.image} alt={item.title} />
                                </div>
                                <div className='flex flex-col my-4 px-2'>
                                    <h1 className='text-[#01579B] font-semibold text-base md:text-xl'>{item.title}</h1>
                                    <div className='mt-5 flex justify-between items-center left-5  bottom-4 right-5 absolute '>
                                        <p className='text-[#01579B] font-semibold text-sm'>{item.created_at}</p>
                                        <Link target='_blank' href={item.link}>
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
            ) : (
                <Loading />
            )}

            <div className='flex justify-center items-center'>
                {showLoading && (<Loading />)}
                {limit < data?.data?.meta.total && (
                    <div className='flex justify-center items-end '>
                        <button onClick={handleShowMore} className='bg-gradient-to-r mt-7 mb-5 from-[#0061FF] to-[#3c939c] rounded-full py-2 px-7 flex justify-between items-center'>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 7.93536L15.2232 7.79851M10.1182 1.41132L16.6412 7.9343L9.98677 14.5887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                            </svg>
                            <span className='ms-2 text-white font-bold text-xl font-serif'>اقرا المزيد</span>
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}

export default Articles
