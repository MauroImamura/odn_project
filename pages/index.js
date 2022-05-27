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
                    <li><a href="https://mauroimamura.github.io/jumpin_game/" target="_blank">Jumpin Game!</a> on github page.</li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/scroll_down">Scroll Page</a></li>
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