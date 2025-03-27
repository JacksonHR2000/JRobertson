import {useState} from "react";
// import './App.css'

export default function Todo() {

    const [todos, settodos] = useState([])
    const [newToDo, setNewtodo] = useState()



    const handleChange = (event) => {
        setNewtodo(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()
        let todoLi = document.getElementById("todo-list");
        const newToDos = [...todos].push(newToDo);
        setNewtodo("");

        settodos(event.value)

    }

    return (
        <div className="todo-app">
            <form onSubmit={handleSubmit}>
                <input
                    className="todo-input"
                    autoComplete="off"
                    type="text"
                    name="newTodo"
                    placeholder="What needs to be done?"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="save-button"
                />
            </form>
            <div className="todo-content">
                Our todo list!
                {todos.map((el, i) => {
                    return (<li key={i}>{el}</li>)
                })}
            </div>
        </div>
    )
}