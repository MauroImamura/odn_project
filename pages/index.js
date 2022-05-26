function Home(){
    return (
        <div>
            <h1>Hello World</h1>
            <Content /></div>
    )
}

function Content(){
    let desc = "Some description about the page subject."
    return <div>{desc}</div>
}

export default Home