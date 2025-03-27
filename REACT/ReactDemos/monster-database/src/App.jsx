import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import MonsterCard from "./components/MonsterCard.jsx";
import "./index.css"
import {monsters} from "./Util/database.ts";


const App = () => {
  const [count, setCount] = useState(0)

    const displayMonsters = monsters.map((monster, i) => {
      return (<MonsterCard {...monster} key={i}/>)
    })


  return (
      <>
          <h1>Monster Database</h1>
          {displayMonsters}
          <h1>Our special monster</h1>
          <MonsterCard
            firstName="Zorg"
            lastName="Destroyer"
            age={500}
            type="Undead"
            moreInfo="Terrifies galaxies"
          />
            <h1>Goodbye</h1>
      </>
  )
}

export default App
