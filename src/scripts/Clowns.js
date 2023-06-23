import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"


export const Clowns = () => {
    return `
    <header class="header">
        <img src="/images/HappyFriendlyClown.png">
        <div class="header__text">
            <h1>Buttons The Friendly Clown</h1>
            <h2 class="header__subhead">Party Services, LLC</h2>
            <p>Hire us for your little darling's next special day!</p>
        </div>
    </header>
    <section class="reservationForm">
        ${ReservationForm()}
    </section>

    <section class="reservations">
        <h2>Reservations</h2>
        <table class="reservations__table">
            <tr class="reservations__table--header">
                <th>Date</th>
                <th>Reservation</th>
                <th>Who Has Dibs</th>
                <th></th>
            </tr>
            ${Reservations()}
        </table>
    </section>
    `
}