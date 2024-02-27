import "../stylesheets/Testimonials.css";
import Alice from "../assets/images/customers/Alice.jpeg"
import Daisy from "../assets/images/customers/Daisy.jpeg"
import Daniel from "../assets/images/customers/Daniel.jpeg"
import Tony from "../assets/images/customers/Tony.jpeg"

function Testimonials() {
    return (
        <section id='testimonials'>
            <h1>Testimonials</h1>
            <section className="reviews">
                <div className="customerCard">
                    <h4>Rating 5 out of 5</h4>
                    <img src={Alice} alt="customer"/>
                    <h5>Alice</h5>
                    <p>My favorite resturant!</p>
                </div>
                <div className="customerCard">
                    <h4>Rating 5 out of 5</h4>
                    <img src={Daniel} alt="customer "/>
                    <h5>Daniel</h5>
                    <p>I'm in love with the weekly specials!</p>
                </div>
                <div className="customerCard">
                    <h4>Rating 5 out of 5</h4>
                    <img src={Tony} alt="customer"/>
                    <h5>Tony</h5>
                    <p>The best mediterranean food in the US!</p>
                </div>
                <div className="customerCard">
                    <h4>Rating 5 out of 5</h4>
                    <img src={Daisy} alt="customer"/>
                    <h5>Daisy</h5>
                    <p>My kids keep begging me to come back!</p>
                </div>
            </section>
        </section>
    );
}

export default Testimonials;