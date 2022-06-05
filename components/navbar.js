import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/ODNProject-logo.png'

export default function Navbar(){
    return(
        <div class="navbar">
            <div>
                <Link href="/">
                    <a>
                    <Image
                        width="200"
                        height="60" 
                        src={logo}/>
                    </a>
                </Link>
                <Link href="/about">
                    <a class="nav-link">ABOUT</a>
                </Link>
                <Link href="/">
                    <a class="nav-link">HOME</a>
                </Link>
            </div>
        </div>
    )
}