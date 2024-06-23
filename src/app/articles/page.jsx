import React from 'react'
import Articles from './components/Articles/Articles'
import homeImg from "../../../public/images/home.jpeg"
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "مقالات واخبار كوبري دمياط التاريخي",
  description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  openGraph: {
    title: "مقالات واخبار كوبري دمياط التاريخي",
    images: ['https://www.damietta-civil-bridge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhistory.d98b66c9.jpg&w=1920&q=75'],
    description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  },
};

async function article() {
    const url = process.env.baseUrl
    const time = +process.env.time
    return (
        <>
            <main className="flex flex-col items-center mt-32 p-3 md:p-5">
                <div className='container mx-auto'>
                    <div className='bg-[#E7F2FF] rounded-xl p-3 md:py-5 md:px-10'>
                        <h1 style={{ lineHeight: "1.15" }} className='text-center bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-3xl lg:text-5xl font-black'>اخبار ومقالات</h1>
                        <p className='text-center my-3 text-sm md:text-lg text-[#01579B] font-semibold'>يمكنك معرفه والاطلاع علي المزيد من المعلومات الموثوقه عن كوبرى دمياط الحضارى من خلال تلك المقالات يمكنك زيارتها فى الوقت الحالى للتاكد من صحه المعلومات .</p>
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
