// Export Reservations() - creates HTML which lists (as a table) all current reservations
//  utilize .map in main function, passing in as argument a helper function which builds the table
//  reservations to be listed chronologically (sort incoming array by date property)
//  rows: reservation date; reservation description (childName's eventName !); select clown dropdown; DENY button

export const Reservations = () => {

}

const mainContainer = document.querySelector("#container")

// add change event listener: when clown dropdown is selected, invokes postCompletion(userCompletion)

// add click event listener: when "DENY" button is clicked, invokes deleteReservation(id)