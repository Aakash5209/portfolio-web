import { useEffect, useState } from "react"

export const Otp = ()=>{
    const [otp,setOtp] = useState('')

    const handleOtp = ()=>{
        const newOtp = Math.floor((Math.random()*9000) + 1000)
        setOtp(newOtp)

    }
    useEffect(()=>{
        handleOtp()

    },[])


    return <>
    <h1>OTP Generator</h1>
    <h2>Your Otp is {otp}</h2>
     <button onClick={handleOtp}>Generate Otp</button>

    </>
}