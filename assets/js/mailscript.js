document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const fullName = formData.get('full-name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Send data to the Azure Function
    fetch('https://joandsonscontactus.azurewebsites.net/api/HttpTrigger1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phone, message }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert('Email sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
    });
});
