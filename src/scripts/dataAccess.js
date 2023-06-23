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
    return applicationState.reservations.map(reservation => ({...reservation}))
}

// API FETCH - REQUESTS

export const fetchReservations = () => {

}

export const fetchClowns = () => {

}

export const fetchCompletions = () => {

}

// API FETCH - POST

export const postReservation = () => {

}

export const postCompletion = () => {

}

// API FETCH - DELETE

export const deleteReservation = () => {
    
}