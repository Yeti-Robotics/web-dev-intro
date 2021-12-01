import React, { useRef, useState } from "react"
import Todo from "../components/Todo/Todo"
import Layout from "../components/Layout/Layout"


const ToDos = () => {
    const [toDos, setToDos] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const OnAddTodo = (e: React.MouseEvent) => {
        if (!inputRef.current) return
        const input = inputRef.current
        if (!input.value) return;
        setToDos([...toDos, input.value])
        input.value = "";
    }

    return (
        <Layout>
            {toDos.map((todo, i) => {
            console.log(todo)
            return <Todo key={i} text={todo} state={[toDos, setToDos]} num={i}></Todo>
            })}
            <input ref={inputRef} />
            <button onClick={OnAddTodo}>Add Todo</button>
        </Layout>
    )
}

export default ToDos