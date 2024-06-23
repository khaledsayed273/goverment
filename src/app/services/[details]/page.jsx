import Image from 'next/image'
import React from 'react'
import SwiperHome from '@/app/components/Home/SwiperHome'
import VideoComponent from '@/app/components/VideoComponent'
import { notFound } from 'next/navigation'
import ScrollTo from './components/ScrollTo'

export async function generateMetadata({ params }) {
    const url = process.env.baseUrl
    try {
        const slug = params.details
        const req = await fetch(`${url}/services/${slug}`).then((res) => res.json())
        const service = await req.data
        return {
            title: service.name,
            description: service.short_description,
            openGraph: {
                title: service.name,
                images: [service.image],
                description: service.short_description,
            },
        }
    } catch (e) {
        return {
            title: "كوبري دمياط الحضاري",
            description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
            openGraph: {
                title: "كوبري دمياط الحضاري",
                images: ['https://www.damietta-civil-bridge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.36f41db9.jpeg&w=1920&q=75'],
                description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
            },
        }
    }
}



const getServicesDetails = async (url, time, slug) => {
    try {
        const res = await fetch(`${url}/services/${slug}`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {
        notFound()
    }
}

async function servicesDetails({ params }) {
    const url = process.env.baseUrl
    const time = +process.env.time
    const details = await getServicesDetails(url, time, params.details)
    return (
        details.status && (
            <>
                <header className='h-[600px] md:h-[800px] xl:h-screen w-full relative text-white'>
                    <Image priority sizes='(max-width:992px) , 100vw' src={details.data.image} fill alt='cover' />
                    <div className="absolute w-full h-full left-0 top-0 bg-[#14274A]/60">
                    </div>
                    <div className='absolute  z-40 w-full h-full md:h-[80%] left-0 bottom-0 p-10 '>
                        <div className="container mx-auto h-full">
                            <div className='flex flex-col justify-center md:justify-start items-center md:items-start h-full md:px-20'>
                                <div className='flex flex-col items-center md:ms-10 font-semibold'>
                                    <div className='text-4xl md:text-6xl lg:text-8xl  my-5 '>
                                        {details.data.name}
                                    </div>
                                </div>
                                <p className='mt-10 font-medium	lg:text-2xl	w-1/2 hidden md:block'>
                                    {details.data.short_description}
                                </p>
                            </div>
                            <ScrollTo />
                        </div>
                    </div>
                </header>
                <main className="flex flex-col items-center p-3 md:p-5">
                    <div className='container mx-auto'>
                        <h1 style={{ lineHeight: "1.15" }} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl '>معلومات عن القاعة</h1>
                        <p className=' md:mb-5 font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2'>
                            {details.data.description}
                        </p>
                        <div className="mt-7">
                            <SwiperHome data={details.data.images} title={true} />
                        </div>
                        <div>
                            <h1 className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl 2xl:leading-[60px]'>ويمكنك مشاهده الساحه اوضح من خلال هذا الفيديو</h1>
                        </div>
                        <div className="overflow-hidden mx-auto w-full h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] rounded-2xl mt-10">
                            <VideoComponent src={details.data.video} />
                        </div>
                        <p className=' mb-10 font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2 '>
                            {details.data.history}
                        </p>
                        {details.data.events.length > 0 && (
                            <>
                                <div>
                                    <h1 style={{ lineHeight: "1.15" }} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl 2xl:leading-[60px]'>بعض الاحداث المقامة بها</h1>
                                </div>
                                <div >
                                    <SwiperHome title={true} />
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </>
        )
    )
}

export default servicesDetails
