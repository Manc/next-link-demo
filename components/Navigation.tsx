import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Navigation.module.css';

export default function Navigation() {
	const router = useRouter();
	const { pathname } = router;

	useEffect(() => {
		console.log('Page:', pathname);
	}, [pathname]);

	return (
		<nav className={styles.container}>
			<Link href="/" prefetch={false}>
				<a className={pathname === '/' ? styles.currentLink : undefined}>Home</a>
			</Link>

			<Link href="/about" prefetch={false}>
				<a className={pathname === '/about' ? styles.currentLink : undefined}>About</a>
			</Link>

			<Link href="/blog" prefetch={false}>
				<a className={pathname === '/blog' ? styles.currentLink : undefined}>Blog</a>
			</Link>
		</nav>
	);
}
