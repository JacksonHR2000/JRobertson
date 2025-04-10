import {useState} from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";


function MuiForm() {
    const [count, setCount] = useState(0)

    // We need a blueprint for our data
    const userSchema = object({
        name: string().required("must have a first name!!!!").max(20),
        email: string().required("must have a last nameee!!1111 >:(((").email(),
    })

    const {register,
            setValue,
            handleSubmit,
            reset,
            formState: {errors}
    } = useForm({
        resolver:yupResolver(userSchema)
    })

    const handleChange = (event) => {
        // What are we doing here? Dealing with the state
        event.preventDefault()

        // First argument = name of our input
        // Second argument = value of data (new state)
        setValue(event.target.name, event.target.value)
    }

    // This is a custom function we write to augment the handleSubmit
    // pre-built function given to us by react-hook-form
    const onSubmit = (data) => {
        const JSONData = JSON.stringify(data)
        console.log(JSONData)

        // Here we would AXIOS post
        // axios(options).then(response => {
        //
        // })
        reset()
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField id="name"
                       label="name"
                       variant="outlined"
                       {...register("name")}
                       error={errors.name !== undefined}
                       helperText={errors.name && <span>{errors.name.message}</span>}
            />
            <TextField id="email"
                       label="email"
                       variant="outlined"
                       {...register("email")}
                       error={errors.email !== undefined}
                       helperText={errors.email && <span>{errors.email.message}</span>}
            />
            <Button type="submit" variant="contained" color="success">Submit</Button>
        </Box>
    );
}

export default MuiForm