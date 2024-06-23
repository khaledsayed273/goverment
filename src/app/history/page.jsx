import React, { Suspense } from 'react'
import Header from '../components/Header'
import SwiperHome from '../components/Home/SwiperHome'
import VideoComponent from '../components/VideoComponent'
import historyImg from "../../../public/images/history.jpg"

const getData = async (url, time) => {
  try {
    const res = await fetch(`${url}/pages/history`, { next: { revalidate: time } })
    return res.json()
  } catch (e) {

    return e
  }
}

async function history() {

  const url = process.env.baseUrl
  const time = +process.env.time
  const data = await getData(url, time)
  const about = `تم إنشاء الكوبري على نهر النيل بإمبابة وتم نقله إلى دمياط عام 1927م وصولًا لنقله أمام مكتبة مصر العامة عام 2007م بتخطيط هندسي وعلمي مدروس من دكتور محمد فتحي البرادعي محافظ دمياط ووزير الإسكان الأسبق.
حقق خلال فترة من 2007 حتى 2011 نقلة ثقافية وحضارية كبيرة وأصبح مركزا ثقافيا وبعدها تأتي أحداث ثورة يناير2011 ليتعرض لأعمال تخريب ونهب لمحتوياته.
شهد كوبري دمياط التاريخي "جسر الحضارة" أعمال تطوير وإعادة تأهيل بمشاركة مجتمعية من شركة موبكو لإنتاج الأسمدة وقد قام بتنفيذه شركة المقاولون العرب من 2021 حتى عام 2024م.`

  return (
    <>
      <Header title={`كوبري دمياط التاريخي (جسر الحضارة)`} img={historyImg} about={about} />
      <main className="flex flex-col items-center p-3 md:p-5">
        <div className='container mx-auto'>
          <p className=' md:mb-5 font-semibold md:font-lg md:leading-10	text-md leading-8 md:text-xl	text-[#01579B] text-center md:px-10 py-2'>
            تم صيانة جسم الكوبري وعزله ضد العوامل الجوية وتجهيزه بالأساسيات والأنظمة الحديثة، حيث إنه يضم قاعات مجهزة بالكامل (قاعات إجتماعات ومحاضرات ومعارض وفنون تشكيلية ومنطقة كافتريات ومطاعم وأنشطه مختلفة).
            أشارت محافظ دمياط دكتورة منال عوض إلى حرص المحافظة على تنفيذ المشروع لاستعادة دوره العظيم وتعظيم الاستفادة منه كأثر تاريخي مسجل بقرار وزاري من وزاره الآثار عام 2010م.
            قام رئيس الوزراء بافتتاح الكوبري بحضور محافظ دمياط، وأشاد رئيس الوزراء بجودة الأعمال المنفذة ووجه بأهمية الحفاظ على ما تم تنفيذه واستدامته وضرورة تنفيذ أعمال الصيانة الدائمة.
          </p>
          {data?.data?.images && (
            <SwiperHome data={data.data.images} />
          )}
          <h1 style={{ lineHeight: "1.20" }} className='text-center bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-3xl lg:text-6xl font-semibold	'>“رحلة عبر الزمن” </h1>
          <div className="overflow-hidden mx-auto w-full h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] rounded-2xl mt-5 lg:mt-0 xl:mt-10">
            <VideoComponent src={"/videos/history.mp4"} />
          </div>
          <p className=' md:mb-5 font-semibold md:font-lg md:leading-10	text-md leading-8 md:text-xl text-[#01579B] text-center md:px-10 py-2'>
            اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
            و واحدا من اوائل الكباري الحديثة في العالم التي صممت لعبور قطارات السكة الحديدية
            لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس تحرك يدويا الي صينية دائري على 28 عجلة على شكل مخروط ناقص ليتحرك عليها الكوبري و بالتالى (فان القيمة التاريخية للكوبري ثابتة و مؤكدة و تستوجب عملا جاد للحفاظ عليه)
          </p>
        </div>
      </main>
    </>
  )
}

export default history
