import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Layout title="Home">
			<div className={styles.main}>
				<h1 className={styles.title}>
					<a href="https://nextjs.org">Next.js</a> Demo
				</h1>
			</div>
		</Layout>
	);
}
