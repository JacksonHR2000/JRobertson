import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import axios from "axios";
import MovieCard from "./components/MovieCard.jsx";


function App() {
  const [count, setCount] = useState(0)
    const [movie, setMovie] = useState(0)

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: 'frozen', include_adult: 'false', language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
        }
    };

    const triggerAPI = () => {
        axios(options)
            .then(res=> {
                console.log(res.data.results)
                let movieArr = res.data.results.map((movie, i) => {
                    return <MovieCard data={movie} key={movie.id ? movie.id : i}/>
                });    // The return from this API is an array

                    setMovie(movieArr)
                console.log(movieArr[0])
        }
        )
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <>
        <h1>App Component</h1>
        <Router>
            <div className="App">
                <ul>
                    <li>
                    {/*    Normally we would use anchor tags*/}
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <hr/>
                    <Routes>
                        <Route>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Route>
                    </Routes>
                </ul>
            </div>
            <br/>
            <button onClick={triggerAPI}>Now playing</button>
            {movie}
        </Router>
    </>
  )
}

export default App
