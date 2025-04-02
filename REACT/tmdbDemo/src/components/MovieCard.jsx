import {useState} from "react";

const MovieCard = ({data}) => {
    const [count, setCount] = useState(0)
    const {title, overview, vote_average, poster_path} = data
    const posterPath=`https://image.tmdb.org/t/p/w342${poster_path}`

    return (
    <>
        <div style={{border: "red 3px solid"}}>
        <h1>{title}</h1>
        <img src={posterPath} alt="temp"/>
            <p>{overview}</p>
        </div>
    </>
    )
}

 export default MovieCard