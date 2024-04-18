import React from 'react'
import Items from './components/Items';

const getData = async (url, time) => {
    try {
        const res = await fetch(`${url}/questions`, { next: { revalidate: time } })
        return res.json()
    } catch (e) {

        return e
    }
}

async function questions() {
    const url = process.env.baseUrl
    const time = +process.env.time
    const data = await getData(url, time)

    return (
        <>
            {/* <Header /> */}
            <main className="flex min-h-screen flex-col items-center mt-28 p-3 md:p-5">
                <div className='container mx-auto'>
                    <h1 style={{lineHeight: "1.15"}} className='bg-gradient-to-r from-[#0061FF] to-[#47b4c0] text-transparent bg-clip-text text-center font-bold my-5 text-3xl  lg:text-4xl xl:text-5xl'>الاسئلة الشائعة</h1>

                    <div className='flex flex-col items-center mt-10 bg-[#E7F2FF] p-7 rounded-2xl'>
                        {data.status && (

                            <Items data={data.data} />
                        )}

                    </div>


                </div>
            </main>

        </>
    )
}

export default questions
