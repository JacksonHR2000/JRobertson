import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home.jsx";
import Contact from "./components/Results.jsx";
import {BrowserRouter, BrowserRouter as Router, Link, redirect, Route, Routes, useNavigate} from "react-router-dom";
import axios from "axios";
import MovieCard from "./components/MovieCard.jsx";
import SearchAppBar from "./components/AppBar.jsx";
import Results from "./components/Results.jsx";
import TheaterImage from "./assets/Theater.png"
import errorPage from "./components/ErrorPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

// Set a context
export const SearchContext = React.createContext()

function App() {
    const [movie, setMovie] = useState([])
    const [searchMovie, setSearchMovie] = useState ("")
    const [displayState, setDisplayState] = useState("nowPlaying")
    const [errLog, setErrLog] = useState("")

    const nowPlayingOptions = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
        }
    };

    const getNowPlaying = () => {
        axios(nowPlayingOptions)
            .then(res=> {
                    let movieArr = res.data.results.map((movie, i) => {
                        return <MovieCard data={movie} key={movie.id ? movie.id : i}/>
                    });    // The return from this API is an array

                    setMovie(movieArr)
                }
            )
            .catch(err => {
                setErrLog(err)
                setMovie([])
            })
    }

    useEffect(() => {
        searchMovie === "" ? setDisplayState("nowPlaying")
            :setDisplayState("searching")

        searchMovie === "" ? getNowPlaying() : getSearchPlaying()
            }, [searchMovie]);

    useEffect(() => {
        getNowPlaying()
        setDisplayState("nowPlaying")
    }, []);

    const getSearchPlaying = () => {

        let searchOptions = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {query: searchMovie, include_adult: 'false', language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
            }
        };

        axios(searchOptions)
            .then(res=> {
                    let movieArr = res.data.results.map((movie, i) => {
                        return <MovieCard data={movie} key={movie.id ? movie.id : i}/>
                    });    // The return from this API is an array
                    setMovie(movieArr)
                    movieArr.length === 0 ? setErrLog("No results found") : null
                }
            )
            .catch(err => {
                setErrLog(err)
                setMovie([])
            })
    }

  return (
    <>
        <h1>Welcome to Movieplace!</h1>
        <Router>
            <SearchContext.Provider value={[searchMovie, setSearchMovie]}>
                <SearchAppBar />
                <div className="App">
                    <ul>
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/now_playing" element={<Results err={errLog} state={displayState} data={movie}/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path="/error" element={<ErrorPage error={errLog}/>}/>
                            </Route>
                        </Routes>
                    </ul>
                </div>
            </SearchContext.Provider>
        </Router>
    </>
  )
}

export default App
