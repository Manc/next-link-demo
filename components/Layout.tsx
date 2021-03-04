import type { PropsWithChildren } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

type LayoutProps = PropsWithChildren<{
	title: string;
}>;

export default function Layout(props: LayoutProps) {
	const { children, title } = props;

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<Navigation />

			{children}
		</>
	);
}
