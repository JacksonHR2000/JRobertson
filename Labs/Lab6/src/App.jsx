import {useEffect, useState} from 'react'
import Dice from "./components/Dice.jsx"
import {rollDie} from "./components/helper.js";

function App() {
    const [roll1, setRoll1] = useState(0)
    const [roll2, setRoll2] = useState(0)

    const rollDice = () => {
        const min = 1;
        const max = 6;
        let newRoll = rollDie()
        setRoll1(newRoll)
        newRoll = rollDie()
        setRoll2(newRoll)

  }

  // On page load, roll the dice
  useEffect(() => {
      rollDice();
  }, [])

  return (
    <div className="appWrapper">
        <h1>
            Roll of the Dice
        </h1>
        <Dice id="d1" number={roll1 - 1}/>
        <Dice id="d2" number={roll2 - 1}/>

        <br/>
        <p id = "rolledValue" style={{visibility: "visible", color: "red", position: "relative", textAlign: "center"}}>{roll1+roll2 != 2 ? `You rolled a ${roll1 + roll2}` : `You rolled Snake-eyes!`}</p>

        <button onClick={rollDice}>Click to roll!</button>
    </div>
  )
}

export default App
