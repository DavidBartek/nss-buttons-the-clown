const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

// terminal command: json-server database.json -p 8088 -w

// GETTERS
// get data from application state

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const getCompletions = () => {
    return applicationState.completions.map(completion => ({...completion}))
}

// API FETCH - REQUESTS
// fetch data from database.json, store locally in applicationState

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (reservations) => {
                applicationState.reservations = reservations
            }
        )
}

export const fetchClowns = () => {
    return fetch (`${API}/clowns`)
        .then(res => res.json())
        .then(
            (clowns) => {
                applicationState.clowns = clowns
            }
        )
}

export const fetchCompletions = () => {
    return fetch (`${API}/completions`)
        .then(res => res.json())
        .then(
            (completions) => {
                applicationState.completions = completions
            }
        )
}

// API FETCH - POST
// passes in user-defined data (from (A) reservation request form and (B) clown dropdown)
// formats to JSON object
// posts the object to selected location in database.json
// re-renders HTML

export const postReservation = (reservationObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationObject)
    }

    return fetch (`${API}/reservations`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const postCompletion = (completionObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completionObject)
    }

    return fetch (`${API}/completions`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// API FETCH - DELETE
// passes in primary key id of reservation
// deletes matching reservation in database.json
// re-renders HTML

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, {method: "DELETE"})
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}