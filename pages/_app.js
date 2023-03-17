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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://stijndv.com" />
				<link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
					integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
					crossOrigin=""
				/>
			</Head>

			{/* root ___ */}
			<AuthProvider>{withLayout(<Component {...pageProps} />)}</AuthProvider>
		</>
	);
}

export default MyApp;
