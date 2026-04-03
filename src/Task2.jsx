// Question 2:
// 1. Create a counter component using useState.
// 2. Use useEffect to log the current and previous count values whenever the counter
// changes.
// 3. Hint: Use a useRef to store the previous state value.
// 4. Add Increment and Decrement buttons.


import React, { useEffect, useRef, useState } from 'react'

function Task2() {
    const [count, setCount] = useState(0)
    const previousCount = useRef(null)
    console.log(previousCount.current);

    useEffect(() => {
        previousCount.current = count;
    })
    return (<>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>count: {count}</h1>
            <h1>previous Count: {previousCount.current}</h1>
        </div>
        <div style={{ display: "flex" }}>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    </>
    )
}

export default Task2
