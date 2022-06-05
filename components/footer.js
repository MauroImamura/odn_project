import Link from 'next/link';

export default function Footer(){
    return(
        <div class="footer">
            Mauro Imamura 2022 - All rights reserved.
            <br/>
            <div class="flex-container">
                <Link href="/about">
                    <a >ABOUT</a>
                </Link>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </div>
        </div>
    )
}