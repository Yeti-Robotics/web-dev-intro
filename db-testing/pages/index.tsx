import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FormCard from '../components/FormCard';
import { Form } from '../models/Form';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const [data, setData] = useState<Form[] | null>(null);

	useEffect(() => {
		fetch('/api/get-forms').then(async (res) => {
			const json = await res.json();
			setData(json);
		});
	}, []);

	if (!data) return <p>loading...</p>;

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				{data.map((form) => {
					return <FormCard {...form} key={form._id} />;
				})}
			</div>
		</div>
	);
};

export default Home;
