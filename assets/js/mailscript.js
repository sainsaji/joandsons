document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            fullName: form['full-name'].value,
            email: form['email'].value,
            phone: form['phone'].value,
            message: form['message'].value
        };

        console.log("Form submitted with data:", formData); // Log the form data

        try {
            const response = await fetch('https://joandsonscontactus.azurewebsites.net/api/HttpTrigger1?', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            console.log("Response from server:", result); // Log the server response
            alert(result.body); // Show success message

        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        }
    });
});
