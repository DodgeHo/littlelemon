import "../stylesheets/Highlights.css";
import bruchettaImage from "../assets/images/food/bruschetta.jpg"
import greekSaladImage from "../assets/images/food/greek salad.jpg"
import lemonDesertImage from "../assets/images/food/lemon dessert.jpg"

function Highlights() {
    return (
        <section id="highlights">
            <div className="highlightsTitle">
                <h1>This week's specials</h1>
                <button className="btn orderOnline">Order Online</button>
            </div>
            <div className="highlightsContent">
                <div className="card">
                    <img src={greekSaladImage} alt="greek salad"/>
                    <h4 className="cardHeader">Greek Salad</h4>
                    <h5 className="cardPrice">$12.99</h5>
                    <p className="cardBody">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
                    </p>
                    <a className="btn cardButton">Order for delivery →</a>
                </div>
                <div className="card">
                    <img src={bruchettaImage} alt="bruchetta"/>
                    <h4 className="cardHeader">Bruchetta</h4>
                    <h5 className="cardPrice">$5.99</h5>
                    <p className="cardBody">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
                    </p>
                    <a className="btn cardButton">Order for delivery →</a>
                </div>
                <div className="card">
                    <img src={lemonDesertImage} alt="lemon cake dessert"/>
                    <h4 className="cardHeader">Lemon Dessert</h4>
                    <h5 className="cardPrice">$5.00</h5>
                    <p className="cardBody">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
                    </p>
                    <a className="btn cardButton">Order for delivery →</a>
                </div>
            </div>
        </section>
    );
}

export default Highlights;