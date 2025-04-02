import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Generate from "./generate.tsx";

function App() {
  const [dawgSrc, setDawgSrc] = useState("")
    const [defaultDawg, setDefaultDawg] = useState(true)

    const baseURL = "https://dog.ceo/api/";

    useEffect(() => {
        generateDog()
        setDefaultDawg(true)
    }, []);

  const generateDog = () => {
      console.log("Connected")
      axios.get(`${baseURL}` + "breeds/image/random")
          .then(response => {
              setDawgSrc(response.data.message)
          })
          .catch(err => {
          console.error("Error: ", err.message)
      })
      setDefaultDawg(false)
  }

  return (
    <>
        <h1>Dog image Generator! :D</h1>
        <img src={dawgSrc} alt="dog" id="myDawgs" style={{maxWidth: "700px", maxHeight: "700px"}}/>
        <br/>
        <button onClick={generateDog}>
            Click me!
        </button>
        {defaultDawg && <p>I've generated a starter dawg for you</p>}
    </>
  )
}

export default App
