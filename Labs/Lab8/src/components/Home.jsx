import React, {useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard.jsx";
import TheaterImage from "../assets/Theater.png";

function Home() {

    return (
        <>
            <img src={TheaterImage} alt="Homepage" style={{width: '98.75vw',
                height: '100vh',
                objectFit: 'cover',}}></img>
        </>
    )
}

export default Home