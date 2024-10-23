document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
    const data = {
        fullName: formData.get('full-name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };

    try {
        const response = await fetch('https://joandsonscontactus.azurewebsites.net/api/HttpTrigger1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json(); // Parse the JSON response
        console.log(result.message); // Log the message from the response

    } catch (error) {
        console.error('Error:', error);
    }
});
