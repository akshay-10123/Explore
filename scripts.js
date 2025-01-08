document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    let checkinDate = document.getElementById('checkinDate').value;
    let checkoutDate = document.getElementById('checkoutDate').value;
    let roomType = document.getElementById('roomType').value;
    
    // Simulate booking process (replace with actual backend call)
    setTimeout(function() {
        // Display booking details
        let bookingDetails = document.getElementById('bookingDetails');
        bookingDetails.innerHTML = `
            <p>Booking confirmed!</p>
            <ul>
                <li>Check-in Date: ${checkinDate}</li>
                <li>Check-out Date: ${checkoutDate}</li>
                <li>Room Type: ${roomType}</li>
            </ul>
        `;
    }, 1000); // Simulate 1 second delay (replace with actual API call)
});
