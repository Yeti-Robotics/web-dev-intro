import { useEffect, useState } from "react";
import MyButton from "../components/MyButton/MyButton";
import Layout from "../components/Layout";

const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const onMouseDown = () => alert("Click!")
		document.addEventListener("mousedown", onMouseDown)
		return () => document.removeEventListener("mousedown", onMouseDown)
	}, [])

	return (
		<Layout>
			<div>
				<p>{count}</p>
				<button
					onClick={() => setCount((previous) => previous + 1)}
				>
					Increase By One
				</button>
			</div>
			<div>
				<MyButton text="Alert!" onClick={() => alert("This is an alert!")}/>
			</div>
		</Layout>
	)
}

export default Home;