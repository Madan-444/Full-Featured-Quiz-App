import React,{useState,useEffect} from 'react'

function AutoCounter() {
    const [count,setCount]= useState(0)
    useEffect(()=> {
        let initialInterval = setInterval(tick,1000)
        return (()=> {
            clearInterval(initialInterval)
        })

    },[])
    let tick=()=> {
        setCount(prevCount=> prevCount +1)
    }
    return (
        <div>
            { (count!==4000) && <p>Count : {count}</p>
            }
        </div>
    )
}

export default AutoCounter
