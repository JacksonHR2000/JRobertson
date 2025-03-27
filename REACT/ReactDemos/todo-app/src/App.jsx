import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/Todo.jsx";

function App() {
  const [count, setCount] = useState(0)

    const person = {
      firstName: "",
        lastName: "",
        address1: "",
        address2: ""
    }

    const [people, setPeople] = useState(person)


  return (
    <>
        <Todo />
    </>
  )
}

export default App
