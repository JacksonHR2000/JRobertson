import {useState} from "react";
import UserCard from "./UserCard.jsx";

function CardContainer({props}) {
    const [count, setCount] = useState(0)

    const sortedMonsters = [...props].sort((a, b) => {
        return (b.age - a.age)
    })

    const displayMonsters = sortedMonsters.map((monster, i) => {
        return (<UserCard {...monster} key={i}/>)
    })

    console.log(sortedMonsters)

    return (
        <div style={{
            padding: "20px",
            border: "2px solid",
            width: "auto"
        }}>
                {displayMonsters}
        </div>
    )
}

export default CardContainer