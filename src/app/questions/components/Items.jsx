"use client"
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function Item({ item }) {
    const [isVisible, setIsVisible] = useState(false);

    const style = useSpring({
        from: { height: 0, opacity: 0 },
        to: {
            height: isVisible ? 'auto' : 0,
            opacity: isVisible ? 1 : 0,
        },
        config: { duration: 400 },
    });

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div className="relative lg:w-2/3 overflow-hidden bg-white p-5 mb-7">
            <div className='flex items-center rounded'>
                <button
                    onClick={toggleVisibility}
                    className=" "
                >
                    <div className='bg-[#E7F2FF] me-2 w-8 h-8 flex justify-center items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 transition-all duration-300 ${isVisible ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </button>
                <span className='text-center mx-auto text-sm md:text-base text-[#01579B] font-bold '>{item.question}</span>
            </div>

            <animated.div style={style} className="overflow-hidden">
                <div className="text-center text-[#01579B] font-semibold md:font-semibold leading-6 xl:leading-8 mt-5 text-sm lg:text-base p-4  rounded">
                    {item.answer}
                </div>
            </animated.div>
        </div>
    );
}

function Items({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Item key={index} item={item} index={index} />
            ))}
        </>
    );
}

export default Items;

