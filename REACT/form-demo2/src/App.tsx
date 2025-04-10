import {ChangeEvent, FormEvent, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // Individual inputs (((BAAAAD)))
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [age, setAge] = useState("")

    // Bulk JSON input (((GOOOD)))

    type formType = {
            firstName: String,
            lastName: String,
            age: Number
    }

    const myForm: formType = {
        firstName: "",
        lastName: "",
        age: 0
    }

    const [formData, setFormData] = useState(myForm)
    const {firstName, lastName, age} = formData

     function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log(formData)
    }

    function handleChange(event: ChangeEvent) {
        event.preventDefault()

        const myNewForm: formType = {
            firstName: event.target.form[0].value,
            lastName: event.target.form[1].value,
            age: event.target.form[2].value
        }

        setFormData(myNewForm)

        // Javascript method
        // setFormData(
        //     {...formData, // Spread operator so we don't lose current values
        //     [event.target.name]:event.target.value // Integrate updated data. If data exists, overwrite it
        //     }
        // )

        console.log(event)
    }



  return (
        <form action="submit" onSubmit={handleSubmit}>
            <label>First Name:
                <input type="text" name="fFName" id="1" value={firstName} onChange={handleChange}/>
            </label>
            <br/>
            <label>Last Name:
                <input type="text" name="fLName" id="2" value={lastName} onChange={handleChange}/>
            </label>
            <br/>
            <label>Age:
                <input type="number" name="fAge" id="3" value={age} onChange={handleChange}/>
            </label>
            <button type="submit">FILE THIS FORM</button>
        </form>
  )
}

export default App
