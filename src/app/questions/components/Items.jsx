"use client"
import React, { useState } from 'react'

function Items({data}) {


    const [isVisible, setIsVisible] = useState([]);

    const toggleVisibility = (index) => {
        setIsVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };


  return (
    data.map((item, index) => (
        <div key={index} className='relative w-full lg:w-2/3 overflow-hidden bg-white p-5 mb-7'>
            <div className='w-full flex items-center mb-2 select-none'>
                <div className='bg-[#E7F2FF] w-8 h-8 flex justify-center items-center cursor-pointer' onClick={() => toggleVisibility(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 transition-all duration-300 ${isVisible[index] ? '' : 'rotate-180'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <h1 className='text-center text-[#01579B] font-bold w-full'>{item.question}</h1>
            </div>
            <div className={`  transition-height duration-300 ${isVisible[index] ? 'h-36 md:h-28 overflow-auto' : ' h-0 overflow-hidden'}`}>
                <p className='text-center text-[#01579B] font-semibold md:font-medium mt-5 text-sm lg:text-base'>{item.answer}</p>
            </div>
        </div>
    ))
  )
}

export default Items
