import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js Demo</title>
			</Head>

			<div className={styles.main}>
				<h1 className={styles.title}>
					<a href="https://nextjs.org">Next.js</a> Demo
				</h1>
			</div>
		</>
	)
}
