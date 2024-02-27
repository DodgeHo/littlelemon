import "../stylesheets/Header.css"
import Nav from "./Nav";
import logo from "../assets/images/logos/Logo.png"

function Header() {
    return (
        <header>
            <img src={logo}></img>
            <div className="filler"></div>
            <Nav />
        </header>
    )
}

export default Header;