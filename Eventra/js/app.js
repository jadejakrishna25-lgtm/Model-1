let currentEvent = "";

function showEvent(title, date, location, price) {

    currentEvent = title;

    document.getElementById("eventTitle").innerText = title;
    document.getElementById("eventDate").innerText = "Date: " + date;
    document.getElementById("eventLocation").innerText = "Location: " + location;
    document.getElementById("eventPrice").innerText = "Price: " + price;
    document.getElementById("eventModal").style.display = "flex";
}

function closeEvent() {
    document.getElementById("eventModal").style.display = "none";
}

function bookEvent() {
    alert("Ticket booked for " + currentEvent);
}

function searchEvent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let events = document.querySelectorAll("#events .card");

    events.forEach(function(e) {

        if (e.dataset.name.includes(input)) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }

    });
}