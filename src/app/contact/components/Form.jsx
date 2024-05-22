"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
function Form({ url }) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        setFullName(`${firstName} ${lastName}`)
    }, [firstName, lastName]) 

    const handleSubmit = async (e) => {
            e.preventDefault()
          try{ 

            const req = await axios.post("https://mixtesting.online/api/v1/feedback" , {
                name: fullName,
                email,
                rate: phone,
                feedback: message
            } , {headers: {
                "Content-Type": "application/json"
            }})

            
            if(req){
                toast.success('تم الارسال بنجاح')
                setFirstName("")
                setLastName("")
                setFullName("")
                setEmail("")
                setPhone("")
                setMessage("")
            }else{
                toast.error('حدثت مشكلة برجاء المحاولة مرة اخري')
            }
          }catch(e){
            console.log(e);
          }
    }

    const classVar = "w-full min-h-full max-h-full font-sans font-normal outline outline-0  transition-all  border-2 text-base md:text-lg px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
    
    return (
        <div className='relative'>
            <div className='absolute hidden md:block z-30 -left-7 -top-7 w-20 h-20 bg-gradient-to-r rounded-full g from-[#0061FF] to-[#47b4c0]'>

            </div>
            <form className='flex flex-col rounded-xl py-5 px-3 md:p-5 bg-white sticky z-40' onSubmit={handleSubmit}>
                <div className="relative h-10 w-full mb-5">
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required aria-label="الاسم الاول" type="text" placeholder="الاسم الاول"
                        className={classVar} />
                </div>
                <div className="relative h-10 w-full mb-5">
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} required aria-label="الاسم الاخير" type="text" placeholder="الاسم الاخير"
                        className={classVar} />
                </div>
                <div className="relative h-10 w-full mb-5">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required aria-label="البريد الالكتروني" type="email" placeholder="البريد الالكتروني"
                        className={classVar} />
                </div>
                <div className="relative h-10 w-full mb-5">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} required aria-label="الهاتف" type="number" placeholder="رقم الهاتف"
                        className={classVar} />
                </div>
                <div className="relative h-[200px] w-full mb-5">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required aria-label="رسالتك" type="text" placeholder="رسالتك"
                        className={classVar} />
                </div>
                <button className='bg-gradient-to-r hover:opacity-70 from-[#0061FF] to-[#47b4c0] text-white py-3 font-bold font-sans rounded-xl'>ارسل رسالتك الان</button>
            </form>

        </div>
    )
}

export default Form
