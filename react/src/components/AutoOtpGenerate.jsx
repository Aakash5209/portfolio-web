import { useEffect, useState } from "react"

export const AutoOtpGenerate = ()=>{
    const [otp,setOtp] = useState('')
    const [timer,setTimer] = useState(10)

    const generateOtp = ()=>{
        const newOtp = Math.floor((Math.random() * 9000) + 1000)
        setOtp(newOtp)
    }

    useEffect(()=>{
        generateOtp()
        const intervalId = setInterval(()=>{
            setTimer((prev)=>prev>0?prev-1:prev)

        },1000)

        const timerId2 = setInterval(()=>{
            generateOtp()
            setTimer(10)


        },10000)

        return ()=>{
            console.log("clean res")
            clearInterval(intervalId)
            clearInterval(timerId2)
        }


    },[])





    return<>
    <h1>Your Otp is {otp}</h1>
    <h2>new Otp generate in {timer}</h2>
    </>
}