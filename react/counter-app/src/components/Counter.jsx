import React, { useState } from 'react'

const Counter = () => {
    // let count = 0
    const [count, setCount] = useState(0)
    function handleIncreament(){
        // count++
        setCount(prev => prev = prev+1)
        console.log(count)
    }
    function handleDecreament(){
        setCount(p => p=p-1)
    }
    function handleReset(){
        setCount(0)
    }
  return (
    <>
        <h3>Counter</h3>
        <h2>{count}</h2>
        <button onClick={()=>handleIncreament()}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={handleReset}>Reset</button>
        </>
  )
}

export default Counter