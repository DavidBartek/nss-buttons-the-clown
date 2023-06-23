// Export ReservationForm() - creates HTML for form which accepts user inputs.
//  fields: parentName (input type: text); childName (text); numAttendees (number); address (text); date (date); reservation length (int)
//  button: Submit Reservation

export const ReservationForm = () => {
    return html = `
        <div class="field">
            <label class="label" for="resParentName">Parent Name</label>
            <input type="text" name="resParentName" class=input" />
        </div>
        <div class="field">
            <label class="label" for="resChildName">Child Name</label>
            <input type="text" name="resChildName" class=input" />
        </div>
        <div class="field">
            <label class="label" for="resNumAttendees">Number of Attendees</label>
            <input type="number" name="resNumAttendees" class=input" />
        </div>
        <div class="field">
            <label class="label" for="resAddress">Address</label>
            <input type="text" name="resAddress" class=input" />
        </div>
        <div class="field">
            <label class="label" for="resEventDate">Event Date</label>
            <input type="date" name="resEventDate" class=input" />
        </div>
        <div class="field">
            <label class="label" for="resLength">Length (Hours)</label>
            <input type="number" name="resLength" class=input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `
}

// add click event listener: when "submit reservation" button is clicked, invokes API fetch (method: POST)
//  collect