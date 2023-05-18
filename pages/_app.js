import Head from 'next/head';
import AuthProvider from 'context/authContext';
// import WarehouserProvider from 'context/warehouseContext';
// import BookingsProvider from 'context/bookingsContext';
import '@assets/styles/index.scss';

function MyApp({ Component, pageProps }) {
	const withLayout =
		Component.getLayout ||
		function (page) {
			return page;
		};

	return (
		<>
			<Head>
				<title>kaima</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.1"></meta>
				<link rel="icon" href="/icons/fav.svg" />
				
			
			</Head>

			{/* root ___ */}
			<AuthProvider>{withLayout(<Component {...pageProps} />)}</AuthProvider>
		</>
	);
}

export default MyApp;
