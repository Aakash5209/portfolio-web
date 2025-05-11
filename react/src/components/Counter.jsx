import { useEffect, useState } from "react"

export const Counter =()=>{

    const [count,setCount] = useState(()=>{
        const saveCount = localStorage.getItem('countVal')
        return saveCount?parseInt(saveCount):0
    })

    
    console.log("fxn rerender")

    useEffect(()=>{
        //save vlaue in LS
        localStorage.setItem('countVal',count)


    },[count])

    const handleAdd=()=>{
        
       setCount(count+1)
       console.log('count val',count)
       
    }


    return<>
    <h1>Current count is - {count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>Reset</button>

    </>
}