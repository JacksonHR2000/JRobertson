import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {SearchContext} from "../App.jsx";
import theme from "./UI/Theme.jsx";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const navigate = useNavigate()

    const [searchMovie, setSearchMovie] = useContext(SearchContext)

    const updateSearch = (event) => {
        setSearchMovie(event.target.value)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Box sx={{display: "flex", flexGrow:1}}>
                            <Typography variant={"h6"} sx={{mr:2, color: 'secondary.main'}}>
                                <p onClick={() => navigate('./home')} style={{cursor:"pointer"}}>Home</p>
                            </Typography>
                            <Typography variant={"h6"} sx={{mr:2, color: 'secondary.main'}}>
                                <p onClick={() => {
                                    navigate('./now_playing')
                                    setSearchMovie("")
                                    }
                                } style={{cursor:"pointer"}}>Now Playing</p>
                            </Typography>
                        </Box>
                    </Typography>
                    <Search onChange={updateSearch} id={"searchField"}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: 'secondary.main' }}/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchMovie}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}