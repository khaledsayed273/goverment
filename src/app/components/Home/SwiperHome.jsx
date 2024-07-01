"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import ReactPaginate from 'react-paginate';

function SwiperHome({ data, title }) {

    const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);


    let sliderRef = useRef(null);

    const handlePageClick = (e) => {
        sliderRef.slickGoTo(e.selected)
    }

    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        lazyLoad: true,
        swipeToSlide: true,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <ReactPaginate
                nextLabel=" >"
                previousLabel="< "
                breakLabel="..."
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={dots.length}
                renderOnZeroPageCount={null}
                forcePage={slideIndex}
            />

        ),

    };

    return (
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                className='h-[300px] mt-7 mb-16 md:mb-20'
                {...settings}
            >
                {data?.map((item, index) => (

                    <div key={index} className="relative w-full h-[230px] overflow-hidden rounded-xl">
                        <Image placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                convertImage(700, 475)
                            )}`}
                            sizes='(max-width:992px) 100vw' src={item.path} fill alt='image' />
                    </div>
                ))}
            </Slider>
         

    )
}

export default SwiperHome
