import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Blog() {
	return (
		<Layout title="Blog">
			<div className={styles.main}>
				<h1 className={styles.title}>
					Blog
				</h1>
			</div>
		</Layout>
	);
}
