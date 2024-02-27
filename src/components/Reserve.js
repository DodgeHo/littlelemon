import "../stylesheets/BookingForm.css"
import {useState} from "react";

function BookingForm() {
    const [resDate, setResDate] = useState({
        value: "",
        isTouched: false
    });
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState("");
    const [resOccasion, setResOccasion] = useState("None");
    const [resName, setResName] = useState("");
    const [resEmail, setResEmail] = useState("");

    const getIsFormValid = () => {
        return (
            (resDate.value !== "") &&
            (resDate.isTouched === true) &&
            resTime &&
            (resTime !== "Select Reservation Time") &&
            resGuests &&
            resOccasion &&
            resName &&
            resEmail
        );
    }

    const clearForm = () => {
        setResDate({
            value: "",
            isTouched: false
        });
        setResTime("Select Reservation Time");
        setResGuests(4);
        setResOccasion("None");
        setResName("");
        setResEmail("");
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        alert("Reservation created! See you soon!");

        clearForm();
    }

    return (
        <section id="reservation">
            <form onSubmit={handleSubmit}>
                <h1 className="rev-header">Reservation Information</h1>
                <p className="rev-p">Please fill out the form below.</p>
                <hr></hr>

                <section id="res-info">
                    <div>
                        <label className="required" for="res-date">Date</label>
                        <input type="date"
                            id="res-date"
                            value={resDate.value}
                            onChange={(e) => {
                                setResDate({...resDate, value: e.target.value});
                            }}
                            onBlur={() => {
                                setResDate({...resDate, isTouched: true});
                            }}
                            required
                        />
                    </div>

                    <div>
                        <label className="required" for="res-time">Time</label>
                        <select id="res-time"
                            value={resTime}
                            onChange={(e) => {
                                setResTime(e.target.value);
                            }}
                            required
                        >
                            <option>Select Reservation Time</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>

                    <div>
                        <label className="required" for="res-guests">Number of Guests</label>
                        <input type="number"
                            placeholder="4"
                            min="1" max="10"
                            id="res-guests"
                            value={resGuests}
                            onChange={(e) => {
                                setResGuests(e.target.value);
                            }}
                            required
                        />
                    </div>

                    <div>
                        <label for="res-occasion">Occasion</label>
                        <select id="res-occasion"
                            value={resOccasion}
                            onChange={(e) => {
                                setResOccasion(e.target.value)
                            }}
                        >
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </section>

                <section id="res-contact">
                    <hr/>

                    <div>
                        <label className="required" for="res-name">Name</label>
                        <input type="text"
                            id="res-name"
                            placeholder="Firstname Lastname"
                            required
                            value={resName}
                            onChange={(e) => {
                                setResName(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label className="required" for="res-email">Email</label>
                        <input type="email"
                            id="res-email"
                            placeholder="example@domain.com"
                            required
                            value={resEmail}
                            onChange={(e) => {
                                setResEmail(e.target.value);
                            }}
                        />
                    </div>
                </section>

                <hr></hr>
                <div id="res-submit-button">
                    <button id="res-btn" type="submit" disabled={!getIsFormValid()}>Make Your Reservation!</button>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;