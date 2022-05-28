import Link from 'next/link';

export default function Navbar(){
    return(
        <div class="navbar">
            <div>ODN PROJECT</div>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
            <Link href="/">
                <a>HOME</a>
            </Link>
        </div>
    )
}