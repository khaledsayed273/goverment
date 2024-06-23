import React from 'react'
import Items from './components/Items';



export const metadata = {
  title: "الاسئلة الشائعة",
  description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  openGraph: {
    title: "الاسئلة الشائعة",
    images: ['https://www.damietta-civil-bridge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhistory.d98b66c9.jpg&w=1920&q=75'],
    description: `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق. حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته. شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م`,
  },
};

const getData = async (url, time) => {
    try {
        const res = await fetch(`${url}/questions`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {
        return e
    }
}

async function questions() {
    const url = process.env.baseUrl
    const time = +process.env.time
    const data = await getData(url, time)

    return (
        <>
            {/* <Header /> */}
            <main className="flex min-h-svh flex-col items-center mt-28 p-3 md:p-5">
                <div className='container mx-auto'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl'>الاسئلة الشائعة</h1>
                    <div className='flex flex-col items-center mt-10 bg-[#E7F2FF] p-7 rounded-2xl'>
                        {data.status && (
                            <Items data={data.data} />
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default questions
