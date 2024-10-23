document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {
        message: formData.get('message') // Assuming your form has a 'message' field
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
        console.log(result); // Log the echoed response

    } catch (error) {
        console.error('Error:', error);
    }
});
