import dynamic from "next/dynamic";
import Header from "./components/Header";
import Image from "next/image";
import home from "../../public/images/home.jpeg"
import history from "../../public/images/history.jpg"
import SwiperHome from "./components/Home/SwiperHome";
import VideoComponent from './components/VideoComponent'


const getData = async (url, time) => {
  try {
    const res = await fetch(`${url}/pages/home`, { next: { revalidate: time } })
    return res.json()
  } catch (e) {

    return e
  }
}

async function page() {

  const url = process.env.baseUrl
  const time = +process.env.time
  const data = await getData(url, time)

  return (
    <>
      <Header img={home} />
      <main className="flex flex-col items-center p-3 md:p-5">
        <div className="container mx-auto">

          <p className=' md:mb-5 font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2'>

            اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
            و واحدا من اوائل الكباري الحديثة في العالم التي صممت لعبور قطارات السكة الحديدية
            لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس تحرك يدويا الي صينية دائري على 28 عجلة على شكل مخروط ناقص ليتحرك عليها الكوبري و بالتالى (فان القيمة التاريخية للكوبري ثابتة و مؤكدة و تستوجب عملا جاد للحفاظ عليه)
          </p>

          <div className="overflow-hidden mx-auto w-full h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] rounded-2xl">
            <VideoComponent src={"/videos/homeEn.mp4"} />
          </div>
          <p className=' font-semibold md:font-lg md:leading-10	text-lg md:text-2xl	text-[#01579B] text-center md:px-10 py-2'>
            اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
            و واحدا من اوائل الكباري الحديثة في العالم التي صممت لعبور قطارات السكة الحديدية
            لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس تحرك يدويا الي صينية دائري على 28 عجلة على شكل مخروط ناقص ليتحرك عليها الكوبري و بالتالى (فان القيمة التاريخية للكوبري ثابتة و مؤكدة و تستوجب عملا جاد للحفاظ عليه)
          </p>

          <div className="my-5 md:my-12 ">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl w-full h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]">
                <Image sizes="(max-width:992px) , 100vw" priority src={home} fill alt="cover" />
              </div>
              <div className="md:mt-5 xl:mt-7 lg:order-2">
                <h1 style={{lineHeight: "1.15"}} className="bg-gradient-to-r from-[#0061FF] to-[#60EFFF] w-full md:w-auto text-center  text-4xl md:text-5xl xl:text-7xl font-bold	 inline-block text-transparent bg-clip-text">الهدف من تجديده</h1>
                <p className="text-[#01579B] font-semibold mt-5 xl:w-4/5 md:text-xl leading-[30px] lg:text-2xl md:leading-[40px] lg:leading-[40px] xl:leading-[40px] 2xl:leading-[45px] text-center md:text-start">

                  اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
                  و واحدا من اوائل الكباري الحديثة في العالم الي صممت لعبور قطارات السكة الحديدية<br />
                  لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس

                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 my-5 md:my-12">
              <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl w-full h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]">
                <Image sizes="(max-width:992px) , 100vw" priority src={history} fill alt="bridge" />
              </div>
              <div className="md:mt-5 xl:mt-7 lg:order-2">
                <h1 style={{lineHeight: "1.15"}} className="bg-gradient-to-r from-[#0061FF] to-[#60EFFF] w-full md:w-auto text-center   text-4xl md:text-5xl xl:text-7xl font-bold	 inline-block text-transparent bg-clip-text"> عن الكوبرى </h1>
                <p className="text-[#01579B] font-semibold mt-5 xl:w-4/5 md:text-xl leading-[30px] lg:text-2xl md:leading-[40px] lg:leading-[40px] xl:leading-[40px] 2xl:leading-[45px] text-center md:text-start">

                  اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
                  و واحدا من اوائل الكباري الحديثة في العالم الي صممت لعبور قطارات السكة الحديدية<br />
                  لعبور المراكب و بطول كابولي يصل الي 30 مترا من جهتي الارتكاز و تنقل الحركة من خلال مجموعة تروس

                </p>
              </div>
            </div>

          </div>

          {data?.data?.images && (
            <div className="my-7">
              <SwiperHome data={data.data.images} />
            </div>
          )}
        </div>

      </main>
    </>
  );
}

export default page
