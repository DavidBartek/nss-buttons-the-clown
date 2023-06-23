// Export Reservations() - creates HTML which lists (as a table) all current reservations
//  utilize .map in main function, passing in as argument a helper function which builds the table
//  reservations to be listed chronologically (sort incoming array by date property)
//  rows: reservation date; reservation description (childName's eventName !); select clown dropdown; DENY button

import { getCompletions, getReservations, getClowns, postCompletion, deleteReservation } from "./dataAccess.js"

export const Reservations = () => {
    // sorts the incoming reservations array by eventDate
    const reservations = getReservations()
    // console.log(reservations)
    function compareDates(a, b) {
        let dateA = new Date(a.eventDate)
        let dateB = new Date(b.eventDate)
        return dateA - dateB
    }
    reservations.sort(compareDates)
    // console.log(reservations)

    let html = `${reservations.map(buildReservationsTable).join("")}`

    return html

}

const buildReservationsTable = (reservation) => {
    const clowns = getClowns()
    const completions = getCompletions()

    const completedReservations = completions.find(completion => completion.reservationId === reservation.id)
    console.log(completedReservations)

    let html = ""

    if (completedReservations) {
        html += `
            <tr class="reservations__table--completed">
                <td>${reservation.eventDate}
                <td>${reservation.childName}'s ${reservation.eventDesc}!</td>
                <td></td>
                <td><button class="reservation__deny" id="reservation--${reservation.id}">DENY!</button></td>
            </tr>
        `
    } else {
        html += `
            <tr class="reservations__table--incomplete">
                <td>${reservation.eventDate}
                <td>${reservation.childName}'s ${reservation.eventDesc}!</td>
                <td><select class="clowns" id="clowns">
                    <option value="">CHOOSE A CLOWN</option>
                    ${clowns.map(clown => {
                        return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                    }).join("")}
                    </select></td>
                <td><button class="reservation__deny" id="reservation--${reservation.id}">DENY!</button></td>
            </tr>
        `
    }

    return html
}



const mainContainer = document.querySelector("#container")

// add change event listener: when clown dropdown is selected, invokes postCompletion(userCompletion)

mainContainer.addEventListener(
    "change",
    e => {
        if (e.target.id === "clowns") {
            const [reservationId, clownId] = e.target.value.split("--")

            const completionObject = {
                reservationId: parseInt(reservationId),
                clownId: parseInt(clownId),
                dateCompleted: Date.now()
            }

            postCompletion(completionObject)
        }
    }
)

// add click event listener: when "DENY" button is clicked, invokes deleteReservation(id)

mainContainer.addEventListener(
    "click",
    e => {
        if (e.target.id.startsWith("reservation--")) {
            const [, reservationId] = e.target.id.split("--")
            deleteReservation(parseInt(reservationId))
        }
    }
)