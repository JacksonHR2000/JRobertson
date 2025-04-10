import {useEffect, useState} from 'react'
import Table from "./components/Table.jsx"
import axios from "axios";
import StarfieldAnimation from "react-starfield";
import backgroundImg from "./Assets/background.png"

function App() {

    const [results, setResults] = useState([])

    // This function maps the received data into only what I need
    const mapData = (res) => {

    }

    const handleSubmit = () => {
        const baseURL = "https://swapi.dev/api"
        const modifier = "people"
        axios.get(baseURL + "/" + modifier)
            .then(res=> {
                    mapData(res)
                    setResults(res.data.results)
                }
            )
            .catch(err => {
                console.log(err)
            })
    }

    const handleReset = () => {
        setResults([])
    }

  // On page load
  useEffect(() => {
  }, [])

    return (
        <div id="pageWrapper" style={{background: '#000', overflow: 'hidden', position: 'relative', backgroundImage: `url(${backgroundImg})`, width: "100%", height: "100vh", backgroundSize: 'cover'
        }}>
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
                numParticles={500}
                lineWidth={1.2}
                starColor={[255, 255, 255]}
                speed={1.2}
            />

            <div style={{
                position: 'relative',
                zIndex: 1,
                color: 'white',
                textAlign: 'center',
                alignItems: 'center',
                // display: "flex",
                paddingTop: '30vh',
                margin: "auto"
            }}>
                    <h1>SWAPI</h1>
                    <br/>
                     <button onClick={handleSubmit}>DDOS the SWAPI API</button>
                     <button onClick={handleReset}>Reset</button>

                    <br/>
                     <Table arr={results} />
            </div>
        </div>
    );
}

export default App
