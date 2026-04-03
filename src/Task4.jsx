// Question 4:
// 1. Wrap your app in <React.StrictMode> inside index.js.
// 2. Create a simple component that logs a message inside a useEffect.
// 3. Observe how React.StrictMode causes the effect to run twice in development mode
// (not in production).
// 4. Add comments to explain this behavior and its purpose


import React, { useEffect, useState } from 'react'

function Task4() {
    const [a, setA] = useState('')
    console.log('a', a);

    useEffect(() => {
        console.log('clicked');

    })
    return (
        <div>
            checked
        </div>
    )
}

export default Task4

// comment
// When using strictmode, console runs twice, but only once when not using it, because strictmode checks again.

