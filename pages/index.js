import Head from 'next/head';
import '../styles/style.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>My Next.js App</title>
            </Head>
            <h1>Hello, Next.js!</h1>
            <script src="/script.js" defer></script>
        </>
    );
}