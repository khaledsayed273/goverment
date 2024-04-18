import React, { Suspense } from 'react'
import Header from '../components/Header'
import Articles from './components/Articles/Articles'
import homeImg from "../../../public/images/home.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import articleImg from "../../../public/images/articles.jpg"



async function article() {

    const url = process.env.baseUrl
    const time = +process.env.time
    return (
        <>
            <Header img={articleImg} />
            <main className="flex min-h-screen flex-col items-center  p-3 md:p-5">
                <div className='container mx-auto'>
                    <p className=' mb-5 font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2'>

                        اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
                        و واحدا من اوائل الكباري الحديثة في العالم التي صممت لعبور قطارات السكة الحديدية
                        لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس تحرك يدويا الي صينية دائري على 28 عجلة على شكل مخروط ناقص ليتحرك عليها الكوبري و بالتالى (فان القيمة التاريخية للكوبري ثابتة و مؤكدة و تستوجب عملا جاد للحفاظ عليه)
                    </p>

                    <div className='bg-[#E7F2FF] rounded-xl p-3 md:py-5 md:px-10'>
                        <h1 style={{ lineHeight: "1.15" }} className='text-center bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-3xl lg:text-5xl font-black'>اخبار ومقالات</h1>
                        <p className='text-center my-3 text-sm md:text-lg text-[#01579B] font-semibold'>يمكنك معرفه واطلاع ع مزيد من المعلومات الموثوقه عن كوبرى دمياط الحضارى من خلال تلك المقالات يمكنك زيارتها فى الوقت الحالى للتاكد من صحه المعلومات .</p>
                        

                        <Articles url={url} time={time} />

                    </div>

                    <div className='grid md:grid-cols-2 md:gap-10 lg:gap-20 mt-10 mb-3'>
                        <div className='flex flex-col justify-end items-center'>
                            <h1 style={{ lineHeight: "1.15" }} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-black  lg:mb-10 xl:mb-14 2xl:mb-20'>اقدم كوبرى سكه حديد فى مصر والعالم يفتح بشكل دائرى .</h1>
                            <Link href={"/contact"} className='bg-gradient-to-r mt-7 mb-5 from-[#0061FF] to-[#3c939c] rounded-full py-2 px-7 inline-flex justify-between items-center'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 7.93536L15.2232 7.79851M10.1182 1.41132L16.6412 7.9343L9.98677 14.5887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                </svg>
                                <span className='ms-2 text-white font-bold text-xl font-serif'>تواصل معنا </span>
                            </Link>
                        </div>
                        <div className='relative xl:w-[90%] h-[250px] lg:h-[350px] overflow-hidden rounded-3xl'>
                            <Image sizes='(max-width:992px), 100vw' fill src={homeImg} alt='image' />
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default article
