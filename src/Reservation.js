import Meta from './components/Meta';
import Header from './components/Header';
import BookingForm from './components/Reserve';
import Footer from './components/Footer';

function Reservation() {
    return (
        <>
            <Meta page="reservation"/>

            <body>
                <Header />
                <BookingForm />
                <Footer />
            </body>
        </>
    );
}

export default Reservation;