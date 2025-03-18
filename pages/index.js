import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>SB‑MIDI Player</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">SB‑MIDI</div>
                    <ul className="nav-links">
                        <li>Home</li>
                        <li>Library</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <header className="hero">
                    <h1>Welcome to SB‑MIDI</h1>
                    <p>Your ultimate MIDI experience</p>
                    <button className="cta-button">Get Started</button>
                </header>
                <main className="content">
                    <section className="player-card">
                        <h2>MIDI Player</h2>
                        <div className="player-display">
                            <div className="track-info">
                                <h3>
                                    Now Playing: <span>Track Title</span>
                                </h3>
                                <p>Artist Name</p>
                            </div>
                            <div className="controls">
                                <button className="control-button">⏮</button>
                                <button className="control-button">▶</button>
                                <button className="control-button">⏭</button>
                            </div>
                            <div className="progress-bar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </section>
                    <section className="features">
                        <h2>Features</h2>
                        <div className="feature-cards">
                            <div className="card">
                                <h3>Real-Time Playback</h3>
                                <p>Experience seamless MIDI playback with low latency.</p>
                            </div>
                            <div className="card">
                                <h3>Customizable Interface</h3>
                                <p>Tailor your experience with a modern, user-friendly UI.</p>
                            </div>
                            <div className="card">
                                <h3>High-Quality Sound</h3>
                                <p>Enjoy top-notch audio performance with advanced soundfonts.</p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <p>© {new Date().getFullYear()} SB‑MIDI. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
