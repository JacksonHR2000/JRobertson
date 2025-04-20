import {useState} from "react";
import NoMovieFound from "../assets/NoMovieFound.png";

function ErrorPage({error}) {
    const [count, setCount] = useState(0)

    return (
        <>
            {error.toString() === "No results found" ?
            <h2>{error.toString()}</h2>
            : <h1>Error!!!!! :(</h1> }
            <img style={{width: "auto"}} src={NoMovieFound} alt="No Movies found"/>
        </>
    )
}

export default ErrorPage