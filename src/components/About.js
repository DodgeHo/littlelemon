import "../stylesheets/About.css";
import ImageA from "../assets/images/restaurant/restaurant.jpg"
import ImageB from "../assets/images/chefs/restaurant chef B.jpg"
function About() {
    return (
        <section id="about">
            <section className="aboutText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily spectials.
                </p>
            </section>
            <section className="aboutImages">
                <img src={ImageA} className="imageOne" alt="Image 1"/>
                <img src={ImageB} className="imageTwo" alt="Image 2"/>
            </section>
        </section>
    );
}

export default About;