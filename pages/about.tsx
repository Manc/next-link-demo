import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function About() {
	return (
		<Layout title="About">
			<div className={styles.main}>
				<h1 className={styles.title}>
					About
				</h1>
			</div>
		</Layout>
	);
}
