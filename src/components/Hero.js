import "../stylesheets/Hero.css"
import heroImage from "../assets/images/food/restauranfood.jpg"
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section id="hero">
            <section className="contentArea">
                <content>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
                    <Link to="/reservation">
                    <button className="btn OrderTable">Order a Table</button>
                    </Link>
                </content>
                <img className="heroImage" src={heroImage} alt="Chef presenting delicious Bruchetta"/>
            </section>
            <div className="background"></div>
        </section>
    )
}

export default Hero;