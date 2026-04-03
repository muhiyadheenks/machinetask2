import { useState } from 'react'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'


function App() {
  const [task, setTask] = useState("")

  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", gap: "50px" }}>
        <button onClick={() => setTask("question1")}>Question1</button>
        <button onClick={() => setTask("question2")}>Question2</button>
        <button onClick={() => setTask("question3")}>Question3</button>
        <button onClick={() => setTask("question4")}>Question4</button>
      </div>
      {task === "question1" && (<Task1 />)}
      {task === "question2" && (<Task2 />)}
      {task === "question3" && (<Task3 />)}
      {task === "question4" && (<Task4 />)}
    </>
  )
}

export default App
