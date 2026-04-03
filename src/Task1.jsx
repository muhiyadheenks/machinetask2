// 1. Add a button that fetches data from an API
// (https://jsonplaceholder.typicode.com/users) using:
// ○ fetch with .then()
// ○ async/await
// 2. Use two different buttons, each handling the fetch with a different method.
// 3. Display the user names in a list on the UI.

import React, { useEffect, useState } from 'react'

function Task1() {
    const [fetchdata, setFetchdata] = useState([])
    const [asyncdata, setAsyncdata] = useState([])
    console.log(fetchdata);
    const handleFetch = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setFetchdata(data))
            .catch((error) => console.log(error))
    }
    const handleAsync = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setAsyncdata(data)
        } catch {
            console.log(error);
        }

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px", gap: "25px" }}>
            <div>
                <button onClick={handleFetch}>fetch</button>
                <ul>
                    {fetchdata.map((item, ind) => (
                        <li key={ind}>{item.name}</li>
                    ))}
                </ul>

            </div>
            <div>
                <button onClick={handleAsync}>async/await</button>
                <ul>
                    {
                        asyncdata.map((item, ind) => (
                            <li key={ind}>{item.name}</li>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Task1
