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
  const about = "يعد كوبرى دمياط المعدني أحد المعالم التاريخية، حيث تم تحويله لمزار سياحي يضم قاعة اجتماعات ومحاضرات ومعارض فنون تشكيلية وتم تسجيله كأثر بقرار وزاري عام 2010 ويعد من أقدم الكباري المعدنية المتحركة على مستوى العالم"
  
  return (
    <>
      <Header img={historyImg} about={about} />
      <main className="flex flex-col items-center p-3 md:p-5">
        <div className='container mx-auto'>
          <p className=' font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2 mx-auto 2xl:w-[80%]'>
            تعرف على اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز و واحدا من اوئل الكباري الحديثة في العالم الي صممت لعبور قطارات السكة الحديدية
          </p>

          {data?.data?.images && (
            <SwiperHome data={data.data.images} />
          )}

          <h1 style={{lineHeight: "1.15"}} className='text-center bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-3xl lg:text-6xl 	 font-semibold	'>“رحلة عبر الزمن” </h1>


          <div className="overflow-hidden mx-auto w-full h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] rounded-2xl mt-5 lg:mt-0 xl:mt-10">
            <VideoComponent src={"/videos/history.mp4"} />
          </div>

          <p className=' mb-5 font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2'>

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
