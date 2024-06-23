import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export const metadata = {
  title: "خدمات كوبري دمياط الحضاري",
  description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  openGraph: {
    title: "خدمات كوبري دمياط الحضاري",
    images: ['https://www.damietta-civil-bridge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.36f41db9.jpeg&w=1920&q=75'],
    description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  },
};

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
            <main className="flex flex-col items-center mt-24  p-3 md:p-5">
                <div className='container mx-auto'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl'>خدماتنا</h1>
                    <div className='mt-10'>
                        {services.status && (
                                services.data.map((item) => (
                                    <div key={item.id} className='bg-[#E7F2FF] mb-10 grid md:grid-cols-2 gap-10 p-7 rounded-2xl'>
                                        <div className='flex flex-col justify-center items-start'>
                                            <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl'>{item.name}</h1>
                                            <p className='text-[#01579B] mt-4 font-serif font-semibold'>{item.short_description}</p>
                                            <Link href={`/services/${item.slug}`} className='bg-gradient-to-r from-[#0061FF] to-[#3c939c] mt-7 mb-5   rounded-full py-2 px-7 inline-flex justify-between items-center'>
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.5 7.93536L15.2232 7.79851M10.1182 1.41132L16.6412 7.9343L9.98677 14.5887" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                                </svg>
                                                <span className='ms-2 text-white font-bold text-xl font-serif'>تعرف علي المزيد</span>
                                            </Link>
                                        </div>
                                        <div className='relative my-auto w-full h-[270px] md:h-[250px] lg:h-[350px] overflow-hidden rounded-3xl'>
                                            <Image style={{objectFit: "cover"}} sizes='(max-width:992px), 100vw' fill src={item.image} alt='image' />
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
