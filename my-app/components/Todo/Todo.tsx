import React from 'react';

interface TodoProps {
	text: string;
	state: [string[], React.Dispatch<React.SetStateAction<string[]>>];
	num: number; // The index of this Todo in the todos array
}

const Todo: React.VFC<TodoProps> = ({ text, state, num }) => {
	const [todos, setTodos] = state;

	const onClose = () => {
		const newTodos = [...todos]; // Create a copy of our todos
		newTodos.splice(num, 1); // Use this Todo's index to delete it in the new array
		setTodos(newTodos); // set new array as the state shown on the website
	};

	return (
		<div style={{ display: 'flex' }}>
			<p>{text}</p>
			<button onClick={onClose}>X</button>
		</div>
	);
};

export default Todo;
