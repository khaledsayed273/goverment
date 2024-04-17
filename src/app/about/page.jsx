import Image from 'next/image'
import React from 'react'
import governor from "../../../public/images/المحافظ.png"
import rizk from "../../../public/images/رزق.png"
import aya from "../../../public/images/aya.png"
import Link from 'next/link'

function about() {

    const data1 = [
        {
            id: 1,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
        {
            id: 2,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
        {
            id: 3,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
    ]

    const data2 = [
        {
            id: 4,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
        {
            id: 5,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
        {
            id: 6,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
    ]

    const data3 = [
        {
            id: 7,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
        {
            id: 8,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: aya
        },
        {
            id: 9,
            name: "أ/ محمد رزق",
            about: "مسؤل العلاقات العامه",
            image: rizk
        },
    ]

    return (
        <main className="flex min-h-screen flex-col items-center  p-3 md:p-5">
            <div className='container mx-auto px-0 md:px-10'>
                
                <div className='mt-32 flex md:items-center flex-col md:flex-row'>
                    <div className='relative w-full h-[300px] md:h-[130px] md:w-[130px] overflow-hidden rounded-3xl col-span-2'>
                        <Image priority style={{ objectFit: "cover" }} sizes='(min-width:992px) , 100vw' src={governor} fill alt='image' />
                    </div>
                    <div className='md:ms-5 mt-3 md:mt-0 p-3 md:w-[90%]'>
                        <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0b24eb] to-[#60b2ff] text-transparent bg-clip-text font-bold text-3xl lg:text-4xl mb-3'>د\منال عوض</h1>
                        <p className='text-[#01579B] font-semibold md:text-lg'>محافظ دمياط وهى تشرف بشكل دائم على مراحل تنفيذ كوبرى دمياط الحضارى
                            منذ البدايه والى الان وتتابع بشكل مستمر مع المسؤلين عن هذا المشروع العظيم
                            وهو اقدم كوبري سكة حديد معدني في العالم يفتح بشكل دائري حول محور الارتكاز
                            و واحدا من اوئل الكباري الحديثة في العالم الي صممت لعبور قطارات السكة الحديدية
                        </p>
                    </div>
                </div>
                
                <div className='mt-5 md:mt-16'>

                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-center font-bold text-2xl lg:text-3xl '>مجلس الامناء والمسؤليين</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                        {data1.map((item) => (
                            <div key={item.id} className='bg-[#E7F2FF] p-4 rounded-3xl'>
                                <div className='relative w-full h-[300px] md:h-[300px] overflow-hidden rounded-3xl'>
                                    <Image  sizes='(min-width:992px), 100vw' fill src={item.image} alt={item.name} />
                                </div>
                                <h1 style={{lineHeight: "1.15"}} className='text-center mt-2 text-lg md:text-3xl font-bold bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text'>{item.name}</h1>
                                <p className='text-center text-xl md:text-2xl text-[#01579B] font-bold mt-2'>{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-5 md:mt-16'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-center font-bold text-2xl lg:text-3xl'>اعضاء اخرى </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                        {data2.map((item) => (
                            <div key={item.id} className='bg-[#E7F2FF] p-4 rounded-3xl'>
                                <div className='relative w-full h-[300px] md:h-[300px] overflow-hidden rounded-3xl'>
                                    <Image  sizes='(min-width:992px), 100vw'  fill src={item.image} alt={item.name} />
                                </div>
                                <h1 style={{lineHeight: "1.15"}} className='text-center mt-2 text-lg md:text-3xl font-bold bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text'>{item.name}</h1>
                                <p className='text-center text-xl md:text-2xl text-[#01579B] font-bold mt-2'>{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-5 md:mt-16'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text text-center font-bold text-2xl lg:text-3xl mb-4'>فريق عمل الموقع الالكترونى</h1>
                    <p className='text-[#01579B] font-bold text-center text-sm md:text-xl lg:w-[85%] xl:w-[75%] 2xl:w-[60%] mx-auto'>يشرف فريق عمل ميجاترون على هذا الموقع الالكترونى ويسهل سبل التواصل لضمان
                        الاداء الفعال وتنفيذ جميع الانشطه داخل الموقع بشكل محترف وايضا المساعده على
                        تعزيز الثقه لدى الجمهور يمكنك التعرف علي المزيد عنهم من خلال موقعهم الالكترونى
                        <Link className='ms-2 text-[#f16a08] underline decoration-solid	 decoration-[#f16a08]' target='_blank' href={"https://www.megatron-soft.com"}>Megatron-soft</Link>
                    </p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
                        {data3.map((item) => (
                            <div key={item.id} className='bg-[#E7F2FF] p-4 rounded-3xl'>
                                <div className='relative w-full h-[300px] md:h-[300px] overflow-hidden rounded-3xl'>
                                    <Image sizes='(min-width:992px), 100vw' fill src={item.image} alt={item.name} />
                                </div>
                                <h1 style={{lineHeight: "1.15"}} className='text-center mt-2 text-lg md:text-3xl font-bold bg-gradient-to-r from-[#0061FF] to-[#60EFFF] text-transparent bg-clip-text'>{item.name}</h1>
                                <p className='text-center text-xl md:text-2xl text-[#01579B] font-bold mt-2'>{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default about
