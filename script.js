document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Here we are preventing the form from submitting (by default)

        // Retrieving the form values of the form fields
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;

        // Regular expressions for email and date validation (had to google this)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

        // Validation checks (storing any errors in an array)
        let errors = [];

        if (firstName.trim() === "") {
            errors.push("First Name is required.");
        }

        if (lastName.trim() === "") {
            errors.push("Last Name is required.");
        }

        if (!emailRegex.test(email)) {
            errors.push("Email is not valid.");
        }

        if (!dobRegex.test(dob)) {
            errors.push("Date of Birth must be in YYYY-MM-DD format.");
        }

        // Display result (if no error then success, if yes then display the message with specific error)
        if (errors.length === 0) {
            resultDiv.innerHTML = `
                <p>Success! Form submitted:</p>
                <p>First Name: ${firstName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Date of Birth: ${dob}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>Error(s): ${errors.join(", ")}</p>`;
        }
    });
});
