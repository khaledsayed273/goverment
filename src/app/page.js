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

          <p className=' md:mb-5 font-semibold md:font-lg md:leading-10	text-md leading-8 md:text-xl	text-[#01579B] text-center md:px-10 py-2'>

            يرجع تاريخ كوبري دمياط إلى عام 1890 عندما تم افتتاحه في مدينة إمبابة بالجيزة لتمر عليه القطارات التي يصل وزنها إلى 72 طنًا فوق نهر النيل ليربط بين الوجهين البحري والقبلي. ويعد من أوائل الكباري الحديدية في العالم التي صممت لعبور القطارات، وهو أقدم كوبري سكة حديد في العالم يتم فتحه بحركة دائرية حول محور الارتكاز. وظل يعمل في إمبابة حتى عام 1925 عندما تم إنشاء كوبري بديل له بنفس الموقع وتم الاستغناء عنه، لكن في ذلك الوقت ظهرت الحاجة إليه في دمياط لاستخدامه في عبور الأفراد والمركبات.

            وبالفعل تم نقله إلى هناك ليشهد فترة جديدة من تاريخه، لكن سرعان ما جار عليه الزمن وانهار. وأصبحت هناك رغبة ملحة لتطويره وتغييره بعد أن أصبح غير آمن كما توقفت حركة فتح وإغلاق الجزء المتحرك منه، مما جعله عائقًا أمام الملاحة النهرية.

            ومع ظهور مشروع كوبري جديد ليحل محله، اقتصر الاهتمام على الجديد وتعرض الكوبري القديم للإهمال. وتم الاتفاق على سرعة التخلص منه ببيعه خردة، وشعر المسؤولون بالارتياح بمجرد موافقة الشركة المنفذة للكوبري الجديد على شرائه بـ 170 ألف جنيه فقط، وهو ما اعتبره البعض صفقة تمكن الدولة من التخلص منه دون تحمل أي تكاليف.

            ومع العمل في الكوبري الجديد تدهورت حالة القديم ووصلت إلى حد أنه يمثل خطورة على حركة السيارات والمشاة.

            فصدر قرار بإغلاقه ومنع السير عليه نهائيًا، وبعد صدور القرار بأيام انهار أحد أجزائه الثلاثة لأن هناك من كان يقطع الحديد منه لحساب أحد تجار الخردة.
            فاصدر المحافظ قرارأ بحظر تقطيع الكوبري ومنع المساس به لحين توظيفه والحفاظ عليه بمعرفة المحافظة
          </p>

          <div className="overflow-hidden mx-auto w-full h-[260px] sm:h-[300px] md:h-[400px] lg:w-[80%] lg:h-[600px] rounded-2xl">
            <VideoComponent src={"/videos/homeEn.mp4"} />
          </div>
          <p className=' font-semibold md:font-lg leading-8 md:leading-10 text-md md:text-xl text-[#01579B] text-center md:px-10 py-2'>
            وقررت المحافظة استغلاله في أغراض العلم والثقافة من خلال جعله مركزًا ثقافيًا.

            وبالوصول إلى الرسومات الأصلية لتصميمه تم تقسيمه من الداخل ليصبح قاعتين للمؤتمرات ومكانًا للجلوس يطل على النيل مباشرة، ويحاط به من الخارج العديد من الكراسي الخشبية للجلوس. وبعد معاينة العديد من الأماكن المقرر وضعه في أحدها، تم الاستقرار على وضعه على ضفاف النيل أمام مكتبة مبارك العامة حيث يتميز المكان بمساحته الكبيرة على الشاطئ، مع إمكانية ربط الكوبري إداريًا بالمكتبة بشكل يسمح بالتكامل ثقافيًا وفنيًا بينهما، مما يساعده على تحقيق نجاح في الوظيفة الجديدة التي سيؤديها.

            لهذا وجب التأكيد على أن الكوبري يعد من علامات الثورة الصناعية في القرن التاسع عشر، والتي ترتبط ارتباطًا وثيقًا مباشرًا بتاريخ السكك الحديدية المصرية.

            الدكتور محمد فتحي البرادعي، مهندس معماري بكلية الهندسة جامعة عين شمس وكان عضو بمجلس الشعب عام 1995 إلى 2000 ومحافظ بدمياط منذ عام 2004 ووزير الاسكان والمرافق والتنمية العمرانية في مصر 2011.

            بمبادرة شخصية من المحافظ المعماري الذي تحمل وحده اعباء القرار والمواجهة بشكل غير تقليدي مع جميع الجهات التي اعتادت العمل النمطي الذي يجعل صاحبه بعيدًا عن المسألة والمسؤولية هو أنه اعطي مثالا مكتمل الجوانب للتعامل الواعي والمسؤول مع القيم التاريخية والتراثية

            منبها بقوة الوجدان لاهمية هذه القضايا ومؤكدا علي انه مازال هناك حاجة الي التثقيف والتنبيه للحس العام
          </p>

          <div className="my-5 md:my-12 ">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl w-full h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]">
                <Image sizes="(max-width:992px) , 100vw" priority src={home} fill alt="cover" />
              </div>
              <div className="md:mt-5 xl:mt-7 lg:order-2">
                <h1 style={{ lineHeight: "1.15" }} className="bg-gradient-to-r from-[#0061FF] to-[#60EFFF] w-full md:w-auto text-center  text-4xl md:text-5xl xl:text-7xl font-bold	 inline-block text-transparent bg-clip-text">الهدف من تجديده</h1>
                <p className="text-[#01579B] font-semibold mt-5 xl:w-4/5 text-md md:text-xl leading-[30px] xl:text-2xl md:leading-[40px] lg:leading-[40px] xl:leading-[40px] 2xl:leading-[45px] text-center md:text-start">

                  البداية كانت في 2003 حين طرحت مناقصة لانشاء كوبري علي نيل دمياط بديلا للكوبري القديم الذي قد تهالك وتوقف حركة الفتح والاغلاق بالجزء المتحرك منه مما جعله عائقا لحركة الملاحة النهرية كما ان عرض الكوبري القديم كان ضيقا ولا يسمح بسهولة الحركة المرورية للسيارات عليه
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 my-5 md:my-12">
              <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl w-full h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]">
                <Image sizes="(max-width:992px) , 100vw" priority src={history} fill alt="bridge" />
              </div>
              <div className="md:mt-5 xl:mt-7 lg:order-2">
                <h1 style={{ lineHeight: "1.15" }} className="bg-gradient-to-r from-[#0061FF] to-[#60EFFF] w-full md:w-auto text-center   text-4xl md:text-5xl xl:text-7xl font-bold	 inline-block text-transparent bg-clip-text"> عن الكوبرى </h1>
                <p className="text-[#01579B] font-semibold mt-5 xl:w-4/5 text-md md:text-xl leading-[30px] xl:text-2xl md:leading-[40px] lg:leading-[40px] xl:leading-[40px] 2xl:leading-[45px] text-center md:text-start">

                  كوبرى دمياط من أقدم الكبارى المعدنية المتحركة على مستوى العالم، أنشئ عام 1890، وهذا الكوبرى كان جزءًا من كوبرى إمبابة القديم على نيل الجيزة، وبلغ طوله 495 مترًا، ثم نُقل جزء منه بطول 170 مترًا إلى موقعه الحالى بدمياط، طبقًا لعرض النيل فى ذلك الموقع عام 1927.
                </p>
              </div>
            </div>

          </div>

          <h1 className=' font-semibold md:font-lg leading-7 md:leading-10	text-md md:text-xl	text-[#01579B] text-center md:px-10 py-2'>
            ومن جانبها صرحت الدكتورة منال عوض محافظ دمياط ، ان المحافظة قد سعت منذ سنوات لتطوير الكوبرى واستعادة دوره البارز الذى حققه بعد نقله عام ٢٠٠٧ بتخطيط علمى دقيق و ملحمة هندسية قدمها الدكتور محمد فتحي البرادعى محافظ دمياط الأسبق، حيث كان جسر الحضارة يُعد منارة ثقافية ومركزًا لعرض الوان الفنون، قبل أن يتعرض للإهمال والأعمال التخريبية خلال أحداث ثورة يناير ٢٠١١، مشيرة إلى أن هذه المساعى تضمنت وضع منهجية محددة لتطوير وإعادة تأهيل الكوبرى لاستعادة مكانته الثقافية و الحضارية وتعظيم الاستفادة من الأثر واستغلاله فى تنفيذ مشروع متكامل يعود بالنفع على المحافظة بما يساهم فى تنشيط السياحة وترويجها وتحقيق التنمية بهذا الملف وذلك وفقًا لتوجيهات القيادة السياسية وأجهزة الدولة بالاهتمام بالمعالم الأثرية باعتبارها محور ذى أهمية وثيقة يساهم في تعزيز الاقتصادات المحلية.
          </h1>
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
