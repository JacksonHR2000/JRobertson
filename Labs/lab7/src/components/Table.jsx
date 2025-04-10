import {useState} from "react";

function Table({arr}) {

    function filterData(dataArray, headers) {
        return dataArray.map(item =>
            headers.reduce((filtered, key) => {
                if (key in item) {
                    filtered[key] = item[key];
                }
                return filtered;
            }, {})
        );
    }

    // const {name, height, hair_color, gender} = arr
    const filters = ["name", "height", "hair_color", "gender"]
    const filteredArr = filterData(arr, filters)

    return (
        Array.isArray(arr) && filteredArr.length != 0 ?
        <table>
            <thead>
            <tr style={{backgroundColor: "white", color: "blue", paddingRight: "100px"}}>
                {/* Create table headers dynamically based on the keys of the first object in the array */}
                {filteredArr.length > 0 && Object.keys(filteredArr[0]).map((key) => (
                    <th style={{textTransform: "Capitalize"}} key={key}>{key === "hair_color" ? "hair color" : key}</th>
                ))}
            </tr>
            </thead>
            <tbody style={{border: "1px solid #333"}}>
            {/* Map through the array and create a table row for each entry */}
            {filteredArr.map((item, index) => (
                <tr>
                    {/* Map through the values of each object and create a table data cell for each value */}
                    {Object.values(item).map((value, index) => (
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
            :
            <p>Click submit to pull data</p>
    )
}

export default Table
