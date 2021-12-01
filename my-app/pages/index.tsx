import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MyButton from '../components/MyButton';

// lifecycle
// 1. mounted to DOM (document object model) html elements / nodes
// 2. updated by state variables
// 3. unmounted from DOM

// useEffect and lifecycle
// no dependency array run on 1 and 2
// dependency array run on 1 and 2 only when variables in array are updated
// empty dependency array runs on 1
// return function to run before 3 happens

const Home = () => {
	// arr = [variable, function]
	// [count, setCount] = arr
	const [count, setCount] = useState(0);

	useEffect(() => {
		const onMouseDown = () => alert('clicked');
		document.addEventListener('mousedown', onMouseDown);
		return () => document.removeEventListener('mousedown', onMouseDown);
	}, []); // This will only run on one as referenced above

	return (
		<Layout>
			<div>
				<p>{count}</p>
				<button onClick={() => setCount((previous) => previous + 1)}>increase by 1</button>
			</div>
			<div>
				<MyButton text='Alert!' onClick={() => alert('This is an alert.')} />
			</div>
		</Layout>
	);
};

export default Home;
