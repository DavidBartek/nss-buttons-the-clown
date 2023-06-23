import { fetchClowns, fetchCompletions, fetchReservations } from "./dataAccess.js"
import { Clowns } from "./Clowns.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = Clowns()
            }
        )
}

renderHTML()

mainContainer.addEventListener("stateChanged", e => {renderHTML()})