import {useState} from "react";

function Greeting(props) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Hello, {props.text}</h1>
        </div>
    )
}

export default Greeting