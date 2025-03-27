import {useState} from "react";

function UserCard({name, age}) {
    const [count, setCount] = useState(0)

    return (
        <div style={{
            marginBottom: "10px",
            padding: "10px",
            border: "3px solid",
        }}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
}

export default UserCard