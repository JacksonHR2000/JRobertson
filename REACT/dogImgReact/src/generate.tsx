import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function Generate() {
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

    export default Generate
}
