import { HashLink as Link } from 'react-router-hash-link';
import "../stylesheets/Nav.css";

function Nav() {
    return (
        <nav id="nav">
            <ul className="links">
                <li>
                    <Link to="/#" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/#about" className="link">About</Link>
                </li>
                <li>
                    <Link to="/" className="link">Menu</Link>
                </li>
                <li>
                    <Link to="/reservation#" className="link">Reservation</Link>
                </li>
                <li>
                    <Link to="/" className="link">Order Online</Link>
                </li>
                <li>
                    <Link to="/" className="link">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;