// Sample data for tourist places
const touristPlaces = [
    { name: "Pyramids of Giza", destination: "Giza",imgSrc: "./pyramids.jpg" },
    { name: "Luxor Temple", destination: "Luxor" ,imgSrc: "./luxor.jpeg"},
    { name: "Abou simble", destination: "Aswan" ,imgSrc: "./aswan.jpg"},
    // Add more places as needed
];

// Function to display tourist places
function displayTouristPlaces() {
    const placesContainer = document.getElementById("places");

    touristPlaces.forEach(place => {
        const placeElement = document.createElement("div");
        placeElement.classList.add("place");
        placeElement.innerHTML = `<h3>${place.name}</h3><p>Destination: ${place.destination}</p>
        <img src="${place.imgSrc}" alt="${place.name}">`;
        placesContainer.appendChild(placeElement);
        placeElement.style.backgroundColor=' #b14eef';
        placeElement.style.color=' #fff';
    });
}

// Function to populate destination options in the form
function populateDestinations() {
    const destinationSelect = document.getElementById("destination");

    touristPlaces.forEach(place => {
        const option = document.createElement("option");
        option.value = place.destination;
        option.text = place.destination;
        destinationSelect.appendChild(option); // Use appendChild to add options
    });
}

// Function to handle reservation submission
function submitReservation() {
    const form = document.getElementById("reservationForm");
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const destination = form.elements["destination"].value;

    // Implement your reservation logic here (e.g., send data to a server)

    alert(`Reservation confirmed!\nName: ${name}\nEmail: ${email}\nDestination: ${destination}`); // Added backticks to create template literals
}

// Initial setup
displayTouristPlaces();
populateDestinations();
