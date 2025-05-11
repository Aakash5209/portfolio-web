import { useEffect, useState } from "react"
import './trafficLight.css'

export const TrafficLight = () =>{
    const [currentLight,setCurrentLight] = useState('red')

    useEffect(()=>{

       const timerId =  setInterval(()=>{
            setCurrentLight((prevLight)=>{
                if(prevLight=='red') return 'yellow'
                if(prevLight=='yellow') return 'green'
                return 'red'
            })

        },2000)

        return ()=>clearInterval(timerId)


    },[])


    return <>
    <div className="signalContainer">

        <div className={`circle ${currentLight=='red'?'red':''}`}></div>
        <div className={`circle ${currentLight=='yellow'?'yellow':''}`}></div>
        <div className={`circle ${currentLight=='green'?'green':''}`}></div>
      
    </div>

    </>
}