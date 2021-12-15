import { useRef, useState } from 'react';
import { Border } from 'react-borders';
import { User } from '../models/User';
import styles from '../styles/Home.module.css';

const Register = () => {
	const [user, setUser] = useState<User>({ username: '', age: 0 });
	const handleSubmit = () => {
		if (user.username && user.age) {
			fetch('/api/register', { method: 'POST', body: JSON.stringify(user) });
		}
	};
	// change

	const labelRef = useRef<HTMLLabelElement>(null);

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<form onSubmit={handleSubmit}>
					<label ref={labelRef}>
						Username
						<input onChange={(e) => setUser({ ...user, username: e.target.value })} />
						<Border parentRef={labelRef} sides={[1, 1, 1, 1]} type='triangles' />
					</label>
					<label>
						Age
						<input
							type='number'
							onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
						/>
					</label>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
