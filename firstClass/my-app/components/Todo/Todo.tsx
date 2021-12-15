import React from "react"

interface TodoProps {
    text: string
    state: [string[], React.Dispatch<React.SetStateAction<string[]>>]
    num: number
}

const Todo: React.VFC<TodoProps> = ({ text, state, num }) => {
    const [todos, setTodos] = state;

    const onClose = () => {
        const newTodos = [...todos]
        newTodos.splice(num, 1);
        setTodos(newTodos);
    }

    return (
        <div style={{ display: "flex" }}>
            <p>{text}</p>
            <button onClick={onClose}>X</button>
        </div>
    )
}

export default Todo