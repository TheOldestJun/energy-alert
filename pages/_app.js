import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>System Relations Management Application</title>
                <meta
                    name='description'
                    content='Application for general relations management in production'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
