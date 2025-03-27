import { useState } from 'react'
import Greeting from "./components/Greeting.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
  const [count, setCount] = useState(0)
  const myMonsters = [
    {
      name: "Bob",
      age: 25
    },
    {
      name: "Charlie",
      age: 35,
    },
    {
      name: "Alice",
      age: 30,
    }
  ]

  return (
    <div>
    <Greeting text={"Jack"}/>
      <CardContainer props={myMonsters}/>
    </div>
  )
}

export default App
