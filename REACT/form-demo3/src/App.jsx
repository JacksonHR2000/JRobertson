import {ChangeEvent, FormEvent, useState} from 'react'
import {useForm} from "react-hook-form";
import {object, string, number} from "yup";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";

function App() {
    // const myForm = {
    //     firstName: "",
    //     lastName: "",
    //     age: 0
    // }

    const userSchema = object({
        firstName: string()
            .required("Please enter your first name")
            .max(5, "Cannot be more than 5 characters in length"),

        age: number().required("You must enter an age")
            .min(21, "You must be 21 or older")
            .max(99, "TOO OLD >:((((")
    })

    // UseForm setup. This allows us to invoke these fucntions without typing
    // useForm."x" a million times
    const { register,
        setValue,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(userSchema),

    })

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    // const [formData, setFormData] = useState(myForm)
    // const {firstName, lastName, age} = formData

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     console.log(formData)
    // }

    function handleChange(event) {
        // event.preventDefault()
        //
        // // const myNewForm = {
        // //     firstName: event.target.form[0].value,
        // //     lastName: event.target.form[1].value,
        // //     age: event.target.form[2].value
        // // }
        // //
        // // setFormData(myNewForm)
        //
        // // Javascript method
        // setFormData(
        //     {...formData, // Spread operator so we don't lose current values
        //     [event.target.name]:event.target.value // Integrate updated data. If data exists, overwrite it
        //     }
        // )
        //
        // console.log(event)


        // useForm implimentation
        setValue(event.target.name, event.target.value)
    }



    return (
        <form action="submit" onSubmit={handleSubmit(onSubmit)}>
            <label>First Name:
                <input type="text"
                       {...register("firstName")}
                       id="1"
                       // value={firstName}
                       onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
            </label>
            <br/>
            <label>Last Name:
                <input type="text"
                       {...register("lastName")}
                       id="2"
                       // value={lastName}
                       onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName.message}</span>}

            </label>
            <br/>
            <label>Age:
                <input type="number"
                       {...register("age")}
                       id="3"
                       // value={age}
                       onChange={handleChange}
                />
                {errors.age && <span>{errors.age.message}</span>}
            </label>
            <button type="submit">FILE THIS FORM</button>
        </form>
    )
}

export default App
