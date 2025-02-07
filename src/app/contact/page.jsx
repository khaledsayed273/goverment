import React from 'react'
import Form from './components/Form'
import Link from 'next/link'
import { Toaster } from 'sonner'

const getData = async (url, time) => {
    try {
        const res = await fetch(`${url}/settings`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {
        return e
    }
}

async function contact() {

    const url = process.env.baseUrl
    const time = +process.env.time
    const setting = await getData(url, time)
    const classLink = "hover:rotate-[360deg] transition-all duration-500 mb-14 md:mb-0"

    return (
        <>
            <Toaster position="top-right" richColors />
            <main className="flex flex-col items-center  p-3 md:p-5 mt-24">
                <div className='container mx-auto'>
                    <h1 style={{ lineHeight: "1.15" }} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl'>تواصل معنا</h1>
                    <div className='bg-[#E7F2FF] rounded-3xl py-5 px-3 sm:p-5 md:p-10 lg:p-16'>
                        <div className="grid lg:grid-cols-2 gap-5 lg:gap-14">
                            {/* right */}
                            <div>
                                <p className='text-[#01579B] text-base lg:text-lg font-semibold'>تواصل معنا</p>
                                <h2 className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text my-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>ابق علي تواصل معنا</h2>
                                <p className='text-[#01579B] font-semibold text-sm lg:text-base mt-5'>هذا هو موقعنا الالكترونى الرسمى الوحيد يمكنكا التواصل معنا من خلاله
                                    او من خلال وسائل الاتصالات الاتيه ايضا
                                </p>
                                <div className='mt-16 me-auto flex flex-col items-start'>
                                    {/* location */}
                                    <div className='flex justify-center items-center mb-5'>
                                        <div className='bg-[#d9eafe] p-3'>
                                            <svg width="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M28.4499 9.53331L16.8999 1.43331C15.7499 0.633313 14.2499 0.633313 13.0999 1.43331L1.5499 9.53331C0.649902 10.1333 0.149902 11.1833 0.149902 12.2333V27.5833C0.149902 29.3833 1.6499 30.8833 3.4499 30.8833H26.5999C28.3999 30.8833 29.8999 29.3833 29.8999 27.5833V12.2333C29.8999 11.1333 29.3499 10.1333 28.4499 9.53331ZM19.5499 28.5833H10.4499V22.8333C10.4499 22.4833 10.5999 22.1833 10.8999 21.9833L14.3999 19.5333C14.7499 19.2833 15.2499 19.2833 15.5999 19.5333L19.0999 21.9833C19.3999 22.1833 19.5499 22.4833 19.5499 22.8333V28.5833ZM27.6499 27.5333C27.6499 28.1333 27.1999 28.5833 26.5999 28.5833H21.7999V22.8333C21.7999 21.7833 21.2999 20.7333 20.3999 20.1333L16.8999 17.6833C15.7499 16.8833 14.2499 16.8833 13.0999 17.6833L9.5999 20.1333C8.6999 20.7333 8.1999 21.7833 8.1999 22.8333V28.5833H3.3999C2.7999 28.5833 2.3499 28.1333 2.3499 27.5333V12.2333C2.3499 11.8833 2.4999 11.5833 2.7999 11.3833L14.3999 3.23331C14.5999 3.08331 14.7999 3.03331 14.9999 3.03331C15.1999 3.03331 15.3999 3.08331 15.5999 3.23331L27.1999 11.3333C27.4999 11.5333 27.6499 11.8333 27.6499 12.1833V27.5333Z" fill="#3758F9" />
                                            </svg>
                                        </div>
                                        <div className='ms-3 text-[#01579B]'>
                                            <h3 className='mb-1 font-bold'>موقعنا الجغرافى</h3>
                                            <p className='font-sans text-sm md:text-base'>كورنيش النيل ,محافظه دمياط,</p>
                                            <p className='font-sans text-sm md:text-base'>جمهورية مصر العربية</p>
                                        </div>
                                    </div>
                                    {/* phone */}
                                    {setting.data.phone && (
                                        <div className='flex justify-center items-center my-5'>
                                            <div className='bg-[#d9eafe] p-3'>
                                                <svg width="30" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24.3 30.9833C22.95 30.9833 21.4 30.6333 19.7 29.9833C16.3 28.6333 12.55 26.0333 9.20003 22.6833C5.85003 19.3333 3.25003 15.5833 1.90003 12.1333C0.400031 8.43332 0.550031 5.38332 2.30003 3.68332C2.35003 3.63332 2.45003 3.58332 2.50003 3.53332L6.70003 1.03332C7.75003 0.433316 9.10003 0.733316 9.80003 1.73332L12.75 6.13332C13.45 7.18332 13.15 8.58332 12.15 9.28332L10.35 10.5333C11.65 12.6333 15.35 17.7833 21.25 21.4833L22.35 19.8833C23.2 18.6833 24.55 18.3333 25.65 19.0833L30.05 22.0333C31.05 22.7333 31.35 24.0833 30.75 25.1333L28.25 29.3333C28.2 29.4333 28.15 29.4833 28.1 29.5333C27.2 30.4833 25.9 30.9833 24.3 30.9833ZM3.80003 5.38332C2.85003 6.43332 2.90003 8.58332 4.00003 11.3333C5.25003 14.4833 7.65003 17.9333 10.8 21.0833C13.9 24.1833 17.4 26.5833 20.5 27.8333C23.2 28.9333 25.35 28.9833 26.45 28.0333L28.85 23.9333C28.85 23.8833 28.85 23.8833 28.85 23.8333L24.45 20.8833C24.45 20.8833 24.35 20.9333 24.25 21.0833L23.15 22.6833C22.45 23.6833 21.1 23.9833 20.1 23.3333C13.8 19.4333 9.90003 13.9833 8.50003 11.7833C7.85003 10.7333 8.10003 9.38332 9.10003 8.68332L10.9 7.43332V7.38332L7.95003 2.98332C7.95003 2.93332 7.90003 2.93332 7.85003 2.98332L3.80003 5.38332Z" fill="#3758F9" />
                                                </svg>
                                            </div>
                                            <div className='ms-3 text-[#01579B]'>
                                                <h3 className='mb-1 font-bold'>رقم التليفون</h3>
                                                <p className='font-sans text-sm md:text-base'>{setting.data.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                    {/* email */}
                                    {setting.data.email && (
                                        <div className='flex justify-center items-center mt-5'>
                                            <div className='bg-[#d9eafe] p-3'>
                                                <svg width="30" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.0001 0.633301H4.0001C2.3001 0.633301 0.850098 2.0333 0.850098 3.7833V19.9833C0.850098 21.6833 2.2501 23.1333 4.0001 23.1333H28.0001C29.7001 23.1333 31.1501 21.7333 31.1501 19.9833V3.7333C31.1501 2.0333 29.7001 0.633301 28.0001 0.633301ZM28.0001 2.8833C28.0501 2.8833 28.1001 2.8833 28.1501 2.8833L16.0001 10.6833L3.8501 2.8833C3.9001 2.8833 3.9501 2.8833 4.0001 2.8833H28.0001ZM28.0001 20.7833H4.0001C3.5001 20.7833 3.1001 20.3833 3.1001 19.8833V5.0833L14.8001 12.5833C15.1501 12.8333 15.5501 12.9333 15.9501 12.9333C16.3501 12.9333 16.7501 12.8333 17.1001 12.5833L28.8001 5.0833V19.9333C28.9001 20.4333 28.5001 20.7833 28.0001 20.7833Z" fill="#3758F9" />
                                                </svg>
                                            </div>
                                            <div className='ms-3 text-[#01579B]'>
                                                <h3 className='mb-1 font-bold'>البريد الالكتروني</h3>
                                                <p className='font-sans text-sm md:text-base'>{setting.data.email}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* left */}
                            <div className='mt-7 lg:mt-0'>
                                <Form url={url} />
                            </div>
                        </div>
                        {/* links */}
                        <div className=' w-full h-full  my-10  rounded-xl  border border-grayColor/30 bg-gradient-to-r from-[#0061FF] to-[#47b4c0]'>
                            {setting?.status && (
                                <div className='flex items-center justify-between md:justify-around flex-col md:flex-row pt-10 md:py-10 md:px-16  l  lg:mx-10 xl:mx-20 '>
                                    {setting.data.email && (
                                        <Link className={classLink} href={`mailto:${setting.data.email}`} aria-label="gmail">
                                            <svg className='w-[35px]' viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M44.8218 1.42725L41.4085 4.09391L26.8751 14.8939L12.3418 3.98725L8.92845 1.32058C8.12433 0.655367 7.14271 0.240687 6.10522 0.127914C5.06772 0.0151406 4.01994 0.209231 3.09167 0.686138C2.16341 1.16304 1.39545 1.90181 0.882955 2.81091C0.370458 3.72001 0.135938 4.75949 0.208448 5.80058V36.7072C0.208448 37.6691 0.590542 38.5916 1.27067 39.2717C1.95081 39.9518 2.87326 40.3339 3.83511 40.3339H12.3418V19.7472L26.8751 30.6539L41.4085 19.7472V40.3339H49.9151C50.877 40.3339 51.7994 39.9518 52.4796 39.2717C53.1597 38.5916 53.5418 37.6691 53.5418 36.7072V5.80058C53.5919 4.76848 53.341 3.74406 52.8198 2.85184C52.2985 1.95962 51.5293 1.23804 50.6057 0.774795C49.682 0.311553 48.6437 0.126605 47.6169 0.242434C46.5901 0.358262 45.619 0.769878 44.8218 1.42725Z" fill="white" />
                                            </svg>
                                        </Link>
                                    )}
                                    {setting.data.whatsapp && (
                                        <Link target='_blank' className={classLink} href={`${setting.data.whatsapp}`} aria-label="whatsapp">
                                            <svg className='w-[40px]' viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_122_743" maskUnits="userSpaceOnUse" x="7" y="6" width="52" height="52">
                                                    <path d="M7.41675 6.66724H58.0834V57.3339H7.41675V6.66724Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_122_743)">
                                                    <path d="M37.5234 7.04062L36.0034 6.82729C31.4352 6.16771 26.7737 6.82023 22.5622 8.70879C18.3507 10.5974 14.7628 13.6441 12.2167 17.494C9.50783 21.1739 7.89298 25.5439 7.55803 30.1011C7.22308 34.6583 8.18164 39.2175 10.3234 43.254C10.5426 43.6585 10.6791 44.1026 10.7249 44.5605C10.7706 45.0183 10.7248 45.4807 10.5901 45.9206C9.49675 49.6806 8.48341 53.4673 7.41675 57.4406L8.75008 57.0406C12.3501 56.0806 15.9501 55.1206 19.5501 54.2406C20.3099 54.0826 21.0997 54.157 21.8167 54.454C25.0466 56.0303 28.5763 56.8975 32.1689 56.9974C35.7615 57.0973 39.3339 56.4276 42.6464 55.0332C45.9588 53.6389 48.9347 51.5521 51.3743 48.9129C53.8139 46.2738 55.6608 43.1433 56.791 39.7317C57.9212 36.32 58.3085 32.7061 57.9271 29.1324C57.5456 25.5587 56.4041 22.1079 54.5793 19.0117C52.7544 15.9155 50.2883 13.2454 47.3466 11.1807C44.4049 9.11596 41.0556 7.70436 37.5234 7.04062ZM44.2434 42.0273C43.2742 42.895 42.0924 43.4903 40.8182 43.7527C39.5441 44.015 38.2232 43.9349 36.9901 43.5206C31.4022 41.9472 26.5544 38.4412 23.3101 33.6273C22.0708 31.9247 21.0746 30.0579 20.3501 28.0806C19.9577 26.9333 19.8869 25.7005 20.1455 24.5159C20.404 23.3313 20.982 22.2401 21.8167 21.3606C22.2231 20.842 22.7762 20.4578 23.4041 20.258C24.0319 20.0582 24.7054 20.0522 25.3367 20.2406C25.8701 20.374 26.2434 21.1473 26.7234 21.734C27.1127 22.8353 27.5687 23.9126 28.0834 24.9606C28.4739 25.4953 28.637 26.1628 28.537 26.8173C28.4371 27.4718 28.0823 28.0601 27.5501 28.454C26.3501 29.5206 26.5367 30.4006 27.3901 31.6006C29.2766 34.3184 31.8797 36.4599 34.9101 37.7873C35.7634 38.1606 36.4034 38.2406 36.9634 37.3606C37.2034 37.014 37.5234 36.7206 37.7901 36.4006C39.3367 34.454 38.8567 34.4806 41.3101 35.5473C42.0914 35.8753 42.8487 36.2593 43.5767 36.694C44.2967 37.1206 45.3901 37.574 45.5501 38.214C45.704 38.9083 45.6635 39.6316 45.433 40.3044C45.2024 40.9771 44.7908 41.5733 44.2434 42.0273Z" fill="white" />
                                                </g>
                                            </svg>
                                        </Link>
                                    )}
                                    {setting.data.instegram && (
                                        <Link target='_blank' className={classLink} href={`${setting.data.instegram}`} aria-label="instegram">
                                            <svg width="37" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipr="true"
                                                    ule="evenodd" d="M12.7473 0.598145C9.59092 0.598144 6.56378 1.85168 4.33148 4.08313C2.09918 6.31457 0.844474 9.34123 0.843262 12.4976V44.2416C0.843262 47.3987 2.09743 50.4265 4.32986 52.659C6.56229 54.8914 9.59012 56.1456 12.7473 56.1456H44.4913C47.6476 56.1444 50.6743 54.8897 52.9057 52.6574C55.1371 50.4251 56.3907 47.3979 56.3907 44.2416V12.4976C56.3895 9.34202 55.1354 6.31606 52.9041 4.08474C50.6728 1.85343 47.6468 0.599356 44.4913 0.598145H12.7473ZM47.9153 12.5159C47.9153 13.4252 47.554 14.2972 46.9111 14.9402C46.2681 15.5832 45.396 15.9444 44.4867 15.9444C43.5774 15.9444 42.7053 15.5832 42.0623 14.9402C41.4193 14.2972 41.0581 13.4252 41.0581 12.5159C41.0581 11.6065 41.4193 10.7345 42.0623 10.0915C42.7053 9.44851 43.5774 9.08729 44.4867 9.08729C45.396 9.08729 46.2681 9.44851 46.9111 10.0915C47.554 10.7345 47.9153 11.6065 47.9153 12.5159ZM28.6238 18.861C26.102 18.861 23.6835 19.8628 21.9003 21.646C20.1171 23.4292 19.1153 25.8477 19.1153 28.3696C19.1153 30.8914 20.1171 33.3099 21.9003 35.0931C23.6835 36.8763 26.102 37.8781 28.6238 37.8781C31.1457 37.8781 33.5642 36.8763 35.3474 35.0931C37.1306 33.3099 38.1324 30.8914 38.1324 28.3696C38.1324 25.8477 37.1306 23.4292 35.3474 21.646C33.5642 19.8628 31.1457 18.861 28.6238 18.861ZM14.5393 28.3696C14.5393 24.6353 16.0227 21.054 18.6632 18.4135C21.3037 15.773 24.885 14.2896 28.6193 14.2896C32.3535 14.2896 35.9348 15.773 38.5753 18.4135C41.2158 21.054 42.6993 24.6353 42.6993 28.3696C42.6993 32.1038 41.2158 35.6851 38.5753 38.3256C35.9348 40.9661 32.3535 42.4496 28.6193 42.4496C24.885 42.4496 21.3037 40.9661 18.6632 38.3256C16.0227 35.6851 14.5393 32.1038 14.5393 28.3696Z" fill="white" />
                                            </svg>
                                        </Link>
                                    )}
                                    {setting.data.facebook && (
                                        <Link target='_blank' className={classLink} href={`${setting.data.facebook}`} aria-label="facebook">
                                            <svg className='w-[25px]' viewBox="0 0 35 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M29.4583 5.66724H24.1249C17.4583 5.66724 13.4583 9.66724 13.4583 16.3339V48.3339" stroke="white" strokeWidth="10" strokeLinecap="round" />
                                                <path d="M5.45825 27.0005H24.1249" stroke="white" strokeWidth="10" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-center my-10'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.2361553203873!2d31.802892730589978!3d31.432139741928793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e500d28a6399%3A0x83637f044da69a7b!2zRGFtaWV0dGEgTWV0YWwgQnJpZGdlINmD2YjYqNix2Yog2K_ZhdmK2KfYtyDYp9mE2YXYudiv2YbZiiDYp9mE2YLYr9mK2YUg2KfZhNmF2YbZgtmI2YQg2YPZhdiy2KfYsSDYs9mK2KfYrdmK!5e0!3m2!1sar!2seg!4v1719098442568!5m2!1sar!2seg" className='w-full xl:w-1/2 h-[270px] sm:h-[300px] md:h-[400px]' loading="lazy" style={{ border: "0" }} referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>
            </main>

        </>
    )
}

export default contact
