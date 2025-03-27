import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
      let passEntry = document.getElementById("password")
    }


    return (
      <>
          <form>
              <input type="email" id="email" placeholder={"Enter your email"}/>
              <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder={"Enter your password"}
              />
              {showPassword ?
                  <i className="fa-solid fa-eye" onClick={handleShowPassword}></i> :
                  <i className="fa-solid fa-eye-slash" onClick={handleShowPassword}></i>


              }
              {/*<input type="checkbox" id="showPassword"*/}
              {/*       onChange={handleShowPassword}*/}
              {/*/>*/}
              <button type="submit">Submit</button>
          </form>
      </>
    )
}

export default App
