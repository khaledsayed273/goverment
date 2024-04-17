import Link from 'next/link'
import React from 'react'

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
                                    <svg width="40" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5738 0.434032C3.35809 0.487038 2.95105 0.644778 2.66927 0.784707C2.23669 0.999454 2.08193 1.11453 1.67494 1.52435C1.12835 2.07478 0.906615 2.41901 0.667072 3.08895C0.509066 3.53087 0.5 3.59795 0.5 4.32938C0.5 5.06081 0.509066 5.12789 0.667072 5.56981C0.906029 6.2381 1.12749 6.58216 1.6751 7.13559C2.1014 7.56641 2.2217 7.65392 2.71497 7.8916C3.02176 8.03947 3.44549 8.19833 3.65656 8.24467C4.19713 8.36327 4.946 8.35346 5.46396 8.22099C6.55667 7.94156 7.2848 7.40638 7.96796 6.38048C8.30248 5.87814 8.42785 5.73635 8.69555 5.5576C9.24647 5.1897 9.43396 5.15594 10.9251 5.15594C12.4163 5.15594 12.6038 5.1897 13.1547 5.5576C13.4224 5.73635 13.5478 5.87814 13.8823 6.38048C14.4146 7.17969 14.8949 7.61265 15.6323 7.95767C17.6065 8.88144 19.993 8.02785 20.9307 6.06249C21.4571 4.95933 21.4571 3.69943 20.9307 2.59627C19.993 0.630914 17.6065 -0.222685 15.6323 0.701091C14.8959 1.04569 14.4145 1.47913 13.8848 2.27455C13.44 2.94251 13.1754 3.17065 12.6049 3.3783C12.3239 3.48053 12.1472 3.49754 11.1543 3.51802C9.14755 3.55934 8.7196 3.39158 7.96407 2.26708C7.28053 1.24982 6.55049 0.715649 5.46396 0.437765C4.92547 0.300022 4.12589 0.298475 3.5738 0.434032ZM18.1242 4.32938V5.12928H17.3243H16.5244V4.32938V3.52948H17.3243H18.1242V4.32938ZM9.96526 8.43803C7.49336 9.0763 6.22552 11.7703 7.31876 14.0615C8.25651 16.0268 10.643 16.8804 12.6172 15.9567C13.3545 15.6116 13.8349 15.1787 14.3672 14.3795C14.7017 13.8771 14.827 13.7353 15.0947 13.5566C15.6457 13.1887 15.8332 13.1549 17.3243 13.1549C18.8155 13.1549 19.003 13.1887 19.5539 13.5566C19.8216 13.7353 19.947 13.8771 20.2815 14.3795C20.9647 15.4054 21.6928 15.9406 22.7855 16.22C23.3035 16.3524 24.0523 16.3623 24.5929 16.2437C24.804 16.1973 25.2277 16.0385 25.5345 15.8906C26.0278 15.6529 26.1481 15.5654 26.5744 15.1346C27.122 14.5811 27.3434 14.2371 27.5824 13.5688C27.7404 13.1269 27.7495 13.0598 27.7495 12.3284C27.7495 11.5969 27.7404 11.5299 27.5824 11.0879C27.3426 10.4173 27.1211 10.0737 26.5716 9.52046C26.1441 9.09006 26.0209 9.00052 25.5317 8.76477C25.2264 8.61769 24.804 8.45942 24.5929 8.41308C24.0523 8.29448 23.3035 8.30429 22.7855 8.43675C21.6942 8.71587 20.9646 9.25158 20.284 10.2735C19.8392 10.9415 19.5746 11.1696 19.0041 11.3773C18.7231 11.4795 18.5464 11.4965 17.5535 11.517C15.5467 11.5583 15.1188 11.3906 14.3633 10.2661C13.6797 9.24881 12.9497 8.71464 11.8632 8.43675C11.3082 8.29485 10.5178 8.29539 9.96526 8.43803ZM11.725 12.3284V13.1283H10.9251H10.1252V12.3284V11.5285H10.9251H11.725V12.3284ZM3.5738 16.432C3.35809 16.485 2.95105 16.6428 2.66927 16.7827C2.23669 16.9974 2.08193 17.1125 1.67494 17.5223C1.12835 18.0728 0.906615 18.417 0.667072 19.0869C0.509066 19.5288 0.5 19.5959 0.5 20.3274C0.5 21.0588 0.509066 21.1259 0.667072 21.5678C0.906029 22.2361 1.12749 22.5801 1.6751 23.1336C2.1014 23.5644 2.2217 23.6519 2.71497 23.8896C3.02176 24.0374 3.44549 24.1963 3.65656 24.2426C4.19713 24.3612 4.946 24.3514 5.46396 24.219C6.55667 23.9395 7.2848 23.4044 7.96796 22.3785C8.30248 21.8761 8.42785 21.7343 8.69555 21.5556C9.24647 21.1877 9.43396 21.1539 10.9251 21.1539C12.4163 21.1539 12.6038 21.1877 13.1547 21.5556C13.4224 21.7343 13.5478 21.8761 13.8823 22.3785C14.4146 23.1777 14.8949 23.6106 15.6323 23.9556C17.6065 24.8794 19.993 24.0258 20.9307 22.0605C21.4571 20.9573 21.4571 19.6974 20.9307 18.5942C19.993 16.6289 17.6065 15.7753 15.6323 16.6991C14.8959 17.0437 14.4145 17.4771 13.8848 18.2725C13.44 18.9405 13.1754 19.1686 12.6049 19.3763C12.3239 19.4785 12.1472 19.4955 11.1543 19.516C9.14755 19.5573 8.7196 19.3896 7.96407 18.2651C7.28053 17.2478 6.55049 16.7136 5.46396 16.4357C4.92547 16.298 4.12589 16.2965 3.5738 16.432ZM18.1242 20.3274V21.1273H17.3243H16.5244V20.3274V19.5275H17.3243H18.1242V20.3274Z" fill="white" />
                                    </svg>

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
