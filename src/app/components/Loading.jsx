import React from 'react'

function Loading() {
    return (
        <div className='flex justify-center items-center my-7'>
            <div className='animate-spin flex justify-center items-center h-full'>
                <div className='w-12 h-12 bg-transparent border-8 border-t-[#0061FF] border-r-[#0099ff] border-l-transparent border-b-[#47b4c0]  rounded-full'>
                </div>
            </div>
        </div>
    )
}

export default Loading
