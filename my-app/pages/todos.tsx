import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import Todo from '../components/Todo';

// add to todo list
// remove from todo list
const Todos = () => {
	const [todos, setTodos] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const onAddTodo = (e: React.MouseEvent) => {
		if (!inputRef.current) return; // return if nothing in ref
		const input = inputRef.current;
		if (!input.value) return; // return if input is empty
		setTodos([...todos, input.value]); // updating state to a new array
		input.value = ''; // clearing input
	};

	return (
		<Layout>
			{todos.map((todo, i) => {
				console.log(todo);
				return <Todo key={i} text={todo} state={[todos, setTodos]} num={i} />;
			})}
			<input ref={inputRef} />
			<button onClick={onAddTodo}>Add Todo</button>
		</Layout>
	);
};

export default Todos;
