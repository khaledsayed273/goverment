import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'

const getServices = async (url, time) => {
    try {
        const res = await fetch(`${url}/services`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {
        notFound()
    }
}

async function services() {

    const url = process.env.baseUrl
    const time = +process.env.time
    const services = await getServices(url, time)

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center  p-3 md:p-5">
                <div className='container mx-auto'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl'>خدماتنا</h1>

                    <div className='mt-10'>
                        {services.status && (
                            
                                services.data.map((item) => (
                                    <div key={item.id} className='bg-[#E7F2FF] mb-10 grid md:grid-cols-2 gap-10 p-7 rounded-2xl'>
                                        <div className='flex flex-col justify-center items-start'>
                                            <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl'>{item.name}</h1>
                                            <p className='text-[#01579B] mt-4 font-serif font-semibold'>{item.short_descrition}</p>
                                            <Link href={`/services/${item.slug}`} className='bg-gradient-to-r from-[#0061FF] to-[#3c939c] mt-7 mb-5   rounded-full py-2 px-7 inline-flex justify-between items-center'>
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 7.93536L15.2232 7.79851M10.1182 1.41132L16.6412 7.9343L9.98677 14.5887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                                </svg>
                                                <span className='ms-2 text-white font-bold text-xl font-serif'>تعرف علي المزيد</span>
                                            </Link>
                                        </div>
                                        <div className='relative my-auto w-full h-[270px] md:h-[250px] lg:h-[350px] overflow-hidden rounded-3xl'>
                                            <Image sizes='(max-width:992px), 100vw' fill src={item.image} alt='image' />
                                        </div>
                                    </div>
                                ))
                            
                        )}


                    </div>
                </div>
            </main>

        </>
    )
}

export default services
