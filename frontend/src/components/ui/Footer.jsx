import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <>
        <Outlet/>
        <nav className='menufooter flexfooter containerfooter'>
            <ul>
                <h3>Facebook: <a href="https://web.facebook.com/profile.php?id=100063643267840">facebook/EscarlataMakeUp</a></h3>
                <h3>Instagram: <a className="footer" href="https://www.instagram.com/escarlata_makeup/">Instagram/EscarlataMakeUp</a></h3>
                <h3>Whastapp: <a className="footer" href="https://api.whatsapp.com/send/?phone=573133390009">+57 313333333</a></h3>
            </ul>
        </nav>
        </>
    );
}

export default Footer;