import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"

function App() {
    const [count, setCount] = useState(0)
    const [days, setDays] = useState(0)

  return (
    <div className="App">
        <h1>Birthday party countdown date</h1>
        <div className="card">
            <button onClick={() => {setDays(days - 1)
                let background = document.getElementsByClassName("App")[0];
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                const randomText = '#' + Math.floor(Math.random()*16777215).toString(16);

                background.style.backgroundColor = randomColor
                background.style.color = randomText
            }
            }>
                Days remaining until Jack's birthday are: {days}

            </button>
        </div>
    </div>
  )
}

export default App
