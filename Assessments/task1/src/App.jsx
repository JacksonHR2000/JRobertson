import { useState } from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState("white")

    const updateColor = (event) => {
        // Set the div's color
        setColor(event.target.innerHTML)

        // Set the background's color
        document.body.style.backgroundColor = event.target.innerHTML;
    }
  return (
    <div style={{"backgroundColor": color}}>
        <h1>Your color swapper</h1>
        <p onClick={updateColor}>Red</p>
        <p onClick={updateColor}>Yellow</p>
        <p onClick={updateColor}>Green</p>
    </div>
  )
}

export default App