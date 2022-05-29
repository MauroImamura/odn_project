import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/ODNProject-logo.png'

export default function Navbar(){
    return(
        <div class="navbar">
            <div>
                <Image 
                    width="200"
                    height="60" 
                    src={logo}/>
                <Link href="/about">
                    <a>ABOUT</a>
                </Link>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </div>
        </div>
    )
}