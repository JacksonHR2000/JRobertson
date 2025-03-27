
import React from "react";
import "../index.css"


const MonsterCard = ({firstName, lastName, type, age, moreInfo}) => {

    return(
        <div className="Monster-card">
            <h1>Hello World</h1>
            <div className="">
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {age}</p>
                <p>type: {type}</p>
                <p>More Info: {moreInfo}</p>
            </div>
        </div>
    )
}

export default MonsterCard