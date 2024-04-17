"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Navbar() {

    const ul = [
        {
            id: 1,
            name: "الرئيسية",
            path: "/"
        },
        {
            id: 2,
            name: "تاريخنا",
            path: "/history"
        },
        {
            id: 3,
            name: "خدماتنا",
            path: "/services"
        },
        {
            id: 4,
            name: "مقالات",
            path: "/articles"
        },
        {
            id: 5,
            name: "المزيد",
            more: [
                {
                    id: 1,
                    name: "تواصل معنا",
                    path: "/contact"
                },
                {
                    id: 2,
                    name: "الاسئلة الشائعة",
                    path: "/questions",
                },
                {
                    id: 3,
                    name: "معلومات عنا",
                    path: "/about",
                },
            ]
        },
    ]
    const [open, setOpen] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        if (window.innerWidth < 767) {
            if (open) {
                document.querySelector("body").style.overflow = "hidden"
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            } else {
                document.querySelector("body").style.overflow = "auto"
            }
        }
    }, [open])

    return (
        <nav className='z-50 pb-1 select-none absolute w-full top-0'>
            <div className="container  mx-auto flex justify-between items-start flex-wrap px-3">
                <div className={`  pt-12 bg-[#0a2845fa] md:bg-inherit md:w-auto justify-center absolute md:static left-0 w-full -z-10 md:z-0 transition-all duration-500 h-screen md:h-auto mt-12 md:mt-0 -top-12 ${open ? "flex   md:mt-0 " : "flex left-full  md:opacity-100"}`}>
                    <ul className='block md:flex'>
                        {ul.map((item) => (
                            item.path ? (
                                <li onClick={() => {
                                    setOpen(false);
                                    setShowMore(false)
                                }} className={`${pathName === "/about" || pathName === "/contact" ? "text-white md:text-[#01579B]" : "text-white"}  hover:text-[#f5c6b6]  md:mx-5 lg:mx-8  my-16 text-center md:my-0 md:text-xl lg:text-2xl  transition-all font-semibold`} key={item.id}>
                                    <Link className={`${item.path === pathName && "text-[#f5c6b6]"}`} href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ) : (
                                <li onClick={() => setShowMore(!showMore)} className='md:mx-5 flex group relative  items-center cursor-pointer lg:mx-8 my-16 text-center md:my-0 md:text-xl lg:text-2xl  transition-all font-semibold ' key={item.id}>
                                    <span className={`${pathName === "/about" || pathName === "/contact" ? "text-white md:text-[#01579B]" : "text-white"}  group-hover:text-[#f5c6b6] `}>{item.name}</span>
                                    <svg className='ms-2' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.70698 7.70698C7.51945 7.89445 7.26514 7.99976 6.99998 7.99976C6.73481 7.99976 6.4805 7.89445 6.29298 7.70698L0.635977 2.04998C0.540467 1.95773 0.464284 1.84739 0.411875 1.72538C0.359466 1.60338 0.33188 1.47216 0.330726 1.33938C0.329572 1.2066 0.354874 1.07492 0.405155 0.952023C0.455436 0.829127 0.529689 0.717474 0.623582 0.623581C0.717475 0.529689 0.829126 0.455436 0.952023 0.405155C1.07492 0.354874 1.2066 0.329572 1.33938 0.330726C1.47216 0.33188 1.60338 0.359466 1.72538 0.411875C1.84739 0.464284 1.95773 0.540466 2.04998 0.635976L6.99998 5.58598L11.95 0.635976C12.1386 0.453818 12.3912 0.353024 12.6534 0.355302C12.9156 0.357581 13.1664 0.46275 13.3518 0.648158C13.5372 0.833566 13.6424 1.08438 13.6447 1.34658C13.6469 1.60877 13.5461 1.86137 13.364 2.04998L7.70698 7.70698Z" fill="white" />
                                    </svg>
                                    <ul className={`absolute top-12 left-1/2 -translate-x-1/2  bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] w-[150px]   transition-all duration-500 overflow-hidden ${showMore ? "h-[110px] md:h-[130px] py-2 rounded-b-3xl" : "h-0"} `}>
                                        {item.more.map((item) => (
                                            <li key={item.id} onClick={() => setOpen(false)} className='text-[#01579B] mb-2 md:mb-4 lg:mb-2 hover:text-[#14329a]'><Link href={item.path}>{item.name}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            )

                        ))}
                    </ul>
                </div>

                <button aria-label="toggle" onClick={() => setOpen(!open)} className={`transition-all duration-500 ${pathName === "/about" || pathName === "/contact" && !open ? "text-black" : "text-neutral-100"}  md:hidden self-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <Link className='flex flex-col justify-center items-center bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] rounded-b-3xl py-3 md:py-5 px-4 md:px-7' href="/">
                    <div className='font-bold md:text-2xl text-blueColor'>كوبري دمياط </div>
                    <div className='font-bold md:text-2xl text-blueColor'> الحضاري </div>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
