import { useState, useEffect } from 'react'
import './App.css'
import Bucketlist from "./components/Bucketlist.js";
import axios from "axios";

function App() {

    // READ the data
    // HTTP request handling
    // Axios for calling
    // If data is good - display
    // List elements
    // State management
    // Start with an empty array


    const [bucketList, setBucketList] = useState([])
    const [newItem, setNewItem] = useState("")
    let baseURL = "http://localhost:3000"

    useEffect(() => {
        // Communicate with the server
        let route = "api/bucket"
        let endpoint = `${baseURL}/${route}`

        axios.get(endpoint)
            .then(data => {
                setBucketList([...data.data]) // By this point, our data is already parsed. This is an array of objects
                // We can go ahead and update the state to the filled array
            })
            .catch(err => console.log(err))

    }, []);

    const liClickHandler = (event) => {
        // When we click the Li, we want to update this item
        // PUT /api/bucket/<id>
        let route = `api/bucket/${event.target.id}`
        let options = {
            method: "put",
            url: `${baseURL}/${route}`,
            headers: {
                "content-type": "application/json"
            }
        }

        axios(options)
            .then(data => {
                console.log("updated entry to", data.data)
                let bucketCopy = [...bucketList]
                let requestedItem = bucketCopy.find(item => {
                    return item.id === Number(event.target.id)

                })
                if(requestedItem) {
                    requestedItem.isComplete = !requestedItem.isComplete
                }

                setBucketList(bucketCopy)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        let route = `api/bucket/${id}`
        let options = {
            method: "delete",
            url: `${baseURL}/${route}`,
            headers: {
                "content-type": "application/json"
            }
        }

        axios(options)
            .then(data => {
                console.log(data)
                let filteredBucketList = bucketList.filter(item => {
                    return item.id !== id
                })
                setBucketList(filteredBucketList)
            })
            .catch(err => {
                console.log(err)
            })
    }


    let myList = Array.isArray(bucketList) ? bucketList.map((element) => {
        return <li key={element.id}
                   onClick={liClickHandler}
                   id={element.id}
                   className={element.isComplete ? "completed" : "uncompleted"}>
            <button onClick={evt => {evt.stopPropagation(); handleDelete(element.id)}}>Delete</button>
            {element.description}
        </li>
    }) : null

    const handleSubmit = (event) => {
        event.preventDefault()

        let item = {
            description: newItem,
            isComplete: false
        }
        console.log(item)

        let endpoint = "api/bucket"
        let options = {
            method: "post",
            url: `${baseURL}/${endpoint}`,
            data: JSON.stringify(item),
            headers: {
                "content-type": "application/json"
            }
        }

        axios(options)
            .then(result => {
                console.log(result)
                let newItem = result.data
                setBucketList([...bucketList, newItem])
            })
            .catch(err => console.log(err))
    }

    const handleChange = (event) => {
        setNewItem(event.target.value)
    }

  return (
    <>
        <h1>Your bucket list!</h1>
        <p>Finish it before they get you...</p>
        <ul>
            {myList}
        </ul>
        <form onSubmit={handleSubmit}>
            <br/>
            <label>
                <input type="text"
                       id="newItem"
                       onChange={handleChange}
                       value={newItem}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    </>
  )
}

export default App
