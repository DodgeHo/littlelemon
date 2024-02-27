import "../stylesheets/Footer.css"
import Logo from "../assets/images/logos/LogoVertical.png"
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo"/>
            <div className="navigation">
                <h5>Navigation</h5>
                <ul>
                    <li>
                        <Link to="/#" className="footerText">Home</Link>
                    </li>
                    <li>
                        <Link to="/#about" className="footerText">About</Link>
                    </li>                    <li>
                        <Link to="/" className="footerText">Menu</Link>
                    </li>                    <li>
                        <Link to="/reservation#" className="footerText">Reservations</Link>
                    </li>                    <li>
                        <Link to="/" className="footerText">Order Online</Link>
                    </li>                    <li>
                        <Link to="/" className="footerText">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="contact">
                <h5>Contact</h5>
                <ul>
                    <li>
                        <h6 className="footerText">4334 Main Road, 33902</h6>
                    </li>
                    <li>
                        <h6 className="footerText">+1 123-456-789</h6>
                    </li>
                    <li>
                        <h6 className="footerText">email@littlelemon.com</h6>
                    </li>
                </ul>
            </div>

            <div className="socialMedia">
                <h5>Social Media Links</h5>
                <ul>
                    <li>
                        <a href="http://facebook.com" className="footerText">Facebook</a>
                    </li>
                    <li>
                        <a href="http://instagram.com" className="footerText">Instagram</a>
                    </li>
                    <li>
                        <a href="http://twitter.com" className="footerText">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;