import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MediaCard from "../src/Components/MediaCard.jsx"
import {Button} from "@mui/material";
import theme from "./Components/UI/ThemeDemo.jsx";
import {ThemeProvider} from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     <h1>MUI demo</h1>
            <Button color={"text.secondary"} variant="contained">Contained</Button>
            <Button variant={"outlined"} color={"text.primary"}
                    sx={{mx:10,
                    border:"10px red solid"}}>
                    Social Distance btn
            </Button>
            <Button variant={"outlined"} color={"secondary"}>BAD!!!! >:(</Button>

            <MediaCard/>
    </>
  )
}

export default App
