document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('full-name'),
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

        const result = await response.json(); // Parse the JSON response
        console.log(result); // Log the echoed response and confirmation message

    } catch (error) {
        console.error('Error:', error);
    }
});
