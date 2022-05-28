import Link from 'next/link';

function Home(){
    return (
        <div>
            <div>
                <h1>Welcome to ODN PROJECT</h1>
                <Content />
            </div>
            <div>
                <h3>Page list:</h3>
                <ul>
                    <li>
                        <Link href="https://mauroimamura.github.io/jumpin_game/" target="_blank">
                            <a>Jumpin Game!</a> on github page.
                        </Link>
                    </li>
                    <li href="/about">
                        <a>About</a>
                    </li>
                    <li href="/scroll_down">
                        <a>Scroll Page</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Content(){
    let desc = "Page under development."
    return <div>{desc}</div>
}

export default Home