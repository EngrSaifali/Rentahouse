// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your public key
    emailjs.init("sLugLlMyllB9ekmUp");

    // Add a listener to the form submit event
    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form input values
        const email = document.querySelector('#login input[type="email"]').value;
        const fullName = document.querySelector('#login input[type="text"]').value;

        // Check if both fields are filled
        if (!email || !fullName) {
            // Display an error message
            document.getElementById('error-message').classList.remove('hidden');
            return;
        }

        // Prepare the data to be sent via EmailJS
        const templateParams = {
            from_name: fullName,
            email_id: email,
        };

        // Send the email using EmailJS
        emailjs.send("service_g2hi0nd", "template_4courcy", templateParams)
            .then(function () {
                // Display a success message and clear the form
                document.getElementById('success-message').classList.remove('hidden');
                document.getElementById('error-message').classList.add('hidden');
                document.getElementById('login').reset();
            }, function (error) {
                // Handle errors if needed
                console.error('Error sending email:', error);
            });
    });
});