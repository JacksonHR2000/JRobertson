import {useState} from "react";
import {Grid} from "@mui/material";
import missingPoster from "../assets/MissingPoster.png";
import NoMovieFound from "../assets/NoMovieFound.png"
import ErrorPage from "./ErrorPage.jsx";


function Results({err, state, data}) {
    const [count, setCount] = useState(0)

    return ( <>
        {state === "searching" ? <h2>Searching</h2> : <h2>Now Playing</h2>}
        {data.length > 0 ?
            <Grid
            container
            spacing={2}
            direction="row"
            justify="space-between"
        >
            {data}
        </Grid> :
            <ErrorPage error={err}/>}
        </>
    )
}

export default Results