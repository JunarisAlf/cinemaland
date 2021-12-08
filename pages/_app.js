import '../styles/global.css';
import '../styles/costom.css';
import Script from 'next/script'    
import App from '../components/App';
import Head from 'next/head';
import Footer from '../components/Core/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <App>
            <Head>
                <link
                    rel="stylesheet"
                    href="http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600"
                />
                <meta content="width=device-width, initial-scale=1" />

                <link rel="stylesheet" href="/css/plugins.css" />
            </Head>
            <Component {...pageProps} />
            <Footer />
            <Script src="/js/jquery.js"></Script>
            <Script src="/js/plugins.js"></Script>
            <Script src="/js/plugins2.js"></Script>
            <Script src="/js/custom.js"></Script>
        </App>
    );
}

export default MyApp;
