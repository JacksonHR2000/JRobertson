import {useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-kit.fontawesome.com/c7fadf5761/icons'
import {dieVals} from "./helper.js";



function Table({number}) {
    const [count, setCount] = useState(0)
    return (
        <>
            <i className={`fa-solid fa-dice-${dieVals[number]}`} style={{fontSize: "100px"}}></i>
        </>
    )
}

export default Table
