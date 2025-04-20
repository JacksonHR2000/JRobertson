import {useState} from "react";
import "../App.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import missingPoster from "../assets/MissingPoster.png"


const MovieCard = ({data}) => {
    // Need to display
    // 1- Title of movie
    // 2- Plot (overview)
    // 3- Rating
    // 4- Poster image

    const [count, setCount] = useState(0)
    const {title, overview, vote_average, poster_path} = data
    const posterPath=`https://image.tmdb.org/t/p/w342${poster_path}`

    return (
    <>
        <Card className={"movieCard"} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography>{title}</Typography>
                {posterPath == "https://image.tmdb.org/t/p/w342null" ? <img style={{width: "325px"}} src={missingPoster} alt="No Poster Found notification"/> : <img src={posterPath} alt="temp"/>}
                <Typography>{overview}</Typography>
                <Typography>Rating: [{Math.round((vote_average * 100) / 100)} / 10]</Typography>
            </CardContent>
        </Card>
    </>
    )
}

 export default MovieCard