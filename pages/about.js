import Link from 'next/link';

function Document(){
    return(
        <div>
            <div>
                <h1>About</h1>
            </div>
            <br/>
            <div>
                <p>ODN Project is a page related to js development of static and dynamic features for web applications.</p>
                <p>It's currently under development using Next.js framework and hosted on vercel service.</p>
                <p>Feel free to visit <Link href="https://github.com/mauroimamura/odn_project" target="_blank"><a>my repository</a></Link> and send feedbacks or suggestion about this project.</p>
            </div>
            <br/>
        </div>
    )
}

export default Document