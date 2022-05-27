import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children}){
    return (
        <>
            <Navbar />
            <div class="main">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}