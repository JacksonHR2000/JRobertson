import { useState } from 'react'
import './App.css'

function App() {
    const [number, setNumber] = useState(0)

    const updateNumber = (event) => {
        if(event.target.value === '+')
            if(Number(number) >= 3)
                null;
            else
                setNumber(Number(number) + 1)

        if(event.target.value === '-')
            if(Number(number) <= 0)
                null;
            else
                setNumber(Number(number) -1)
    }
  return (
    <div>
        <h1>Your counting component</h1>
        <p>Your number: {number}</p>
        <button value ={'-'} onClick={updateNumber}>-</button>
        <button value = {'+'} onClick={updateNumber}>+</button>
    </div>
  )
}

export default App