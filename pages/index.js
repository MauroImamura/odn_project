import Link from 'next/link';

function Home(){
    return (
        <div>
            <div>
                <h1 class="main-title">Welcome to ODN PROJECT</h1>
                <br/>
                <p role="description" class="description" word-wrap break-word>
                    <DescriptionText />
                </p>
                <br/>
            </div>
            <div>
                <h3>List of Contents:</h3>
                <ul class="list-of-contents">
                    <li>
                        <a href="https://mauroimamura.github.io/jumpin_game/" target="_blank">Jumpin Game!</a> on github page.
                    </li>
                    {/* <li>
                        <Link href="/canvas">
                            <a>Canvas animation</a>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/scroll_down">
                            <a>Scroll Page</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function DescriptionText(){
    let description_text = "This is a basic javascript project to test and show some features related to web applications.";
    return description_text
}

export default Home