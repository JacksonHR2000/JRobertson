import { useState } from 'react'
import './App.css'

function App() {

  const [number, setRollNumber] = useState(1);
  const [isSeven, setIsSeven] = useState(false);

    // useEffect(() => {
    //     console.log(number, isSeven)
    // }, [number, isSeven]);


  const updateRollNumber = () => {
        let newNum = Math.floor(Math.random() * (10)) + 1

        setRollNumber(newNum)
        newNum == 7 ? updateIsSeven() : null
        console.log("updateRollNum" + newNum, number, isSeven)
  }

  const updateIsSeven = () => {
      setIsSeven(true);
      console.log("7 rolled")
  }



  return (
    <>
        <h1 className="header">Welcome to the casino clicker!</h1>
        <h2>{number}</h2>
        {!isSeven && <button
            onClick={updateRollNumber}
        >
            Click me to win!
        </button>}
        {isSeven && <h1>You won!</h1>}
    </>
  )
}

export default App
