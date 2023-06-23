// Export ReservationForm() - creates HTML for form which accepts user inputs.
//  fields: parentName (input type: text); childName (text); numAttendees (number); address (text); date (date); reservation length (int)
//  button: Submit Reservation

import { postReservation } from "./dataAccess.js"

export const ReservationForm = () => {
    const html = `
        <div class="field">
            <label class="label" for="resParentName">Parent Name</label>
            <input type="text" name="resParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resChildName">Child Name</label>
            <input type="text" name="resChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resEventDesc">Event Description</label>
            <input type="text" name="resEventDesc" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resNumAttendees">Number of Attendees</label>
            <input type="number" name="resNumAttendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resAddress">Address</label>
            <input type="text" name="resAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resEventDate">Event Date</label>
            <input type="date" name="resEventDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resLength">Length (Hours)</label>
            <input type="number" name="resLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

// add click event listener: when "submit reservation" button is clicked, invokes postReservation(reservationRequest)
//  accesses all user-defined inputs from form above, assigns each to a variable
//  creates object with all variables
//  invokes postReservation(object)

document.addEventListener(
    "click",
    e => {
        if (e.target.id === "submitReservation") {
            const parentName = document.querySelector("input[name='resParentName']").value
            const childName = document.querySelector("input[name='resChildName']").value
            const eventDesc = document.querySelector("input[name='resEventDesc']").value
            const numAttendees = document.querySelector("input[name='resNumAttendees']").value
            const address = document.querySelector("input[name='resAddress']").value
            const eventDate = document.querySelector("input[name='resEventDate']").value
            const eventLength = document.querySelector("input[name='resLength']").value

            const reservationObject = {
                parentName: parentName,
                childName: childName,
                eventDesc: eventDesc,
                numAttendees: numAttendees,
                address: address,
                eventDate: eventDate,
                eventLength: eventLength
            }

            postReservation(reservationObject)
        }
    }
)