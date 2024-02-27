import Meta from './components/Meta';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function Home() {
    return (
        <>
            <Meta />

            <body>
                <Header />
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
                <Footer />
            </body>
        </>
    );
}

export default Home;