import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo.svg"

const getData = async (url, time) => {
    try {
        const res = await fetch(`${url}/settings`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {

        return e
    }
}

async function Footer() {

    const url = process.env.baseUrl
    const time = +process.env.time
    const setting = await getData(url, time)

    const ul = [
        {
            id: 1,
            name: "الرئيسية",
            href: "/"
        },
        {
            id: 2,
            name: "تاريخنا",
            href: "/history"
        },
        {
            id: 3,
            name: "خدماتنا",
            href: "/services"
        },
        {
            id: 4,
            name: "مقالات",
            href: "/articles"
        },
        {
            id: 5,
            name: "الاسئلة الشائعة",
            href: "/questions"
        },
        {
            id: 6,
            name: "معلومات عنا",
            href: "/about"
        },
        {
            id: 7,
            name: "تواصل معنا",
            href: "/contact"
        },
    ]

    return (
        <div className='relative bg-gradient-to-r from-[#144594] to-[#235c63]  px-5  md:px-10 w-full h-[540px] sm:h-[300px] '>

            <div className='z-50 absolute left-0 top-0 right-0 bottom-0 '>
                <div className='container mx-auto h-full flex flex-col justify-center  xl:px-5 2xl:px-0'>
                    <div className='flex items-start flex-col sm:flex-row sm:items-center w-full  sm:mt-28 '>
                        <div className='flex items-center flex-col sm:flex-row sm:items-center justify-between w-full   sm:border-t sm:border-b'>

                            <div className='px-5  sm:px-0'>
                                <ul className='text-white flex flex-col sm:flex-row'>
                                    {ul.map((item) => (
                                        <li className='sm:ms-5 text-center my-3' key={item.id}>
                                            <Link className='capitalize font-semibold' href={`${item.href}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='mx-auto sm:mt-0 sm:mb-0 sm:ms-auto sm:me-0 py-3'>
                                <Link aria-label="logoFooter" href={`/`} className='relative inline-block px-2 py-1 mt-1'>
                                    <div className='relative w-[60px]'>
                                        <Image src={logo} alt='logo' />
                                    </div>

                                </Link>
                            </div>


                        </div>
                    </div>

                    <div className='text-white  sm:mb-20 sm:mt-16 flex flex-col sm:flex-row justify-between px-3'>
                        {setting?.status && (
                            <div className='mt-7 sm:mt-0 flex justify-center'>
                                {setting.data.whatsapp && (

                                    <Link aria-label="whatsApp" className='mx-3 hover:rotate-[360deg] transition-all duration-300' target='_blank' href={`${setting.data.whatsapp}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0,0,256,256">
                                            <g fill="#fffbfb" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
                                        </svg>
                                    </Link>
                                )}
                                {setting.data.facebook && (

                                    <Link aria-label="facebook" className='mx-3 hover:rotate-[360deg] transition-all duration-300' target='_blank' href={`${setting.data.facebook}`}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.8035 0.828371H1.57348C1.45718 0.828108 1.34198 0.850819 1.23449 0.895201C1.127 0.939583 1.02933 1.00476 0.947101 1.08699C0.864869 1.16923 0.79969 1.26689 0.755308 1.37438C0.710926 1.48188 0.688215 1.59708 0.688479 1.71337V15.9434C0.688479 16.4334 1.08348 16.8284 1.57348 16.8284H9.23248V10.6314H7.14248V8.23137H9.23248V6.44837C9.23248 4.37937 10.5025 3.25937 12.3365 3.25937C13.2115 3.25937 13.9795 3.31237 14.2035 3.35537V5.51037H12.9125C11.9095 5.51037 11.7285 5.97937 11.7285 6.68337V8.23037H14.1075L13.7975 10.6304H11.7285V16.8284H15.8035C16.2935 16.8284 16.6885 16.4334 16.6885 15.9434V1.71337C16.6887 1.59708 16.666 1.48188 16.6216 1.37438C16.5773 1.26689 16.5121 1.16923 16.4299 1.08699C16.3476 1.00476 16.25 0.939583 16.1425 0.895201C16.035 0.850819 15.9198 0.828108 15.8035 0.828371Z" fill="white" />
                                        </svg>
                                    </Link>
                                )}

                                {setting.data.email && (

                                    <Link aria-label="linkedin" className='mx-3 hover:rotate-[360deg] transition-all duration-300' target='_blank' href={`mailto:${setting.data.email}`}>
                                        <svg width="20" viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M44.8218 1.42725L41.4085 4.09391L26.8751 14.8939L12.3418 3.98725L8.92845 1.32058C8.12433 0.655367 7.14271 0.240687 6.10522 0.127914C5.06772 0.0151406 4.01994 0.209231 3.09167 0.686138C2.16341 1.16304 1.39545 1.90181 0.882955 2.81091C0.370458 3.72001 0.135938 4.75949 0.208448 5.80058V36.7072C0.208448 37.6691 0.590542 38.5916 1.27067 39.2717C1.95081 39.9518 2.87326 40.3339 3.83511 40.3339H12.3418V19.7472L26.8751 30.6539L41.4085 19.7472V40.3339H49.9151C50.877 40.3339 51.7994 39.9518 52.4796 39.2717C53.1597 38.5916 53.5418 37.6691 53.5418 36.7072V5.80058C53.5919 4.76848 53.341 3.74406 52.8198 2.85184C52.2985 1.95962 51.5293 1.23804 50.6057 0.774795C49.682 0.311553 48.6437 0.126605 47.6169 0.242434C46.5901 0.358262 45.619 0.769878 44.8218 1.42725Z" fill="white" />
                                        </svg>
                                    </Link>
                                )}
                                {setting.data.instegram && (

                                    <Link aria-label="linkedin" className='mx-3 hover:rotate-[360deg] transition-all duration-300' target='_blank' href={`${setting.data.instegram}`}>
                                        <svg width="20" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipr="true"
                                                ule="evenodd" d="M12.7473 0.598145C9.59092 0.598144 6.56378 1.85168 4.33148 4.08313C2.09918 6.31457 0.844474 9.34123 0.843262 12.4976V44.2416C0.843262 47.3987 2.09743 50.4265 4.32986 52.659C6.56229 54.8914 9.59012 56.1456 12.7473 56.1456H44.4913C47.6476 56.1444 50.6743 54.8897 52.9057 52.6574C55.1371 50.4251 56.3907 47.3979 56.3907 44.2416V12.4976C56.3895 9.34202 55.1354 6.31606 52.9041 4.08474C50.6728 1.85343 47.6468 0.599356 44.4913 0.598145H12.7473ZM47.9153 12.5159C47.9153 13.4252 47.554 14.2972 46.9111 14.9402C46.2681 15.5832 45.396 15.9444 44.4867 15.9444C43.5774 15.9444 42.7053 15.5832 42.0623 14.9402C41.4193 14.2972 41.0581 13.4252 41.0581 12.5159C41.0581 11.6065 41.4193 10.7345 42.0623 10.0915C42.7053 9.44851 43.5774 9.08729 44.4867 9.08729C45.396 9.08729 46.2681 9.44851 46.9111 10.0915C47.554 10.7345 47.9153 11.6065 47.9153 12.5159ZM28.6238 18.861C26.102 18.861 23.6835 19.8628 21.9003 21.646C20.1171 23.4292 19.1153 25.8477 19.1153 28.3696C19.1153 30.8914 20.1171 33.3099 21.9003 35.0931C23.6835 36.8763 26.102 37.8781 28.6238 37.8781C31.1457 37.8781 33.5642 36.8763 35.3474 35.0931C37.1306 33.3099 38.1324 30.8914 38.1324 28.3696C38.1324 25.8477 37.1306 23.4292 35.3474 21.646C33.5642 19.8628 31.1457 18.861 28.6238 18.861ZM14.5393 28.3696C14.5393 24.6353 16.0227 21.054 18.6632 18.4135C21.3037 15.773 24.885 14.2896 28.6193 14.2896C32.3535 14.2896 35.9348 15.773 38.5753 18.4135C41.2158 21.054 42.6993 24.6353 42.6993 28.3696C42.6993 32.1038 41.2158 35.6851 38.5753 38.3256C35.9348 40.9661 32.3535 42.4496 28.6193 42.4496C24.885 42.4496 21.3037 40.9661 18.6632 38.3256C16.0227 35.6851 14.5393 32.1038 14.5393 28.3696Z" fill="white" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        )}

                        <span className='text-sm text-center sm:text-start mt-7 sm:mt-0'>© 2024 Megatron. All rights reserved.</span>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
