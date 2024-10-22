function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var contactMethodPhone = document.getElementById('contactMethodPhone').checked;
    var contactMethodEmail = document.getElementById('contactMethodEmail').checked;
    var successMessage = document.getElementById('successMessage');

    // Reset previous error messages
    successMessage.innerHTML = "";

    // Flag to track form validity
    var isFormValid = true;

    // Check name
    if (name.length < 4) {
        alert("Name should be at least 4 characters long.");
        isFormValid = false;
    } else if (!/^[A-Za-z]+$/.test(name)) {
        alert("Name should only contain alphabetical characters.");
        isFormValid = false;
    }

    // Check email
    if (email.length < 4) {
        alert("Email should be at least 4 characters long.");
        isFormValid = false;
    } else if (!email.includes("@") || (email.indexOf("@") === email.length - 1) || (email.indexOf("@") !== email.lastIndexOf("@")) || (email.endsWith("@gmail.com") === false && email.endsWith("@outlook.com") === false)) {
        alert("Email should be in the format of 'example@example.com' and end with either '@gmail.com' or '@outlook.com'.");
        isFormValid = false;
    }

    // Check phone number
    if (phone.length < 4) {
        alert("Phone number should be at least 4 digits long.");
        isFormValid = false;
    } else if (phone.length > 15) {
        alert("Phone number should not exceed 15 digits.");
        isFormValid = false;
    } else if (!/^\d+$/.test(phone)) {
        alert("Phone number should only contain numeric digits.");
        isFormValid = false;
    }

    // Check message
    if (message.trim().length === 0) {
        alert("Message should not be empty.");
        isFormValid = false;
    }

    // Check contact method
    if (!contactMethodPhone && !contactMethodEmail) {
        alert("Please select at least one preferred contact method.");
        isFormValid = false;
    }

    // Show success message if form is valid
    if (isFormValid) {
        successMessage.innerHTML = "Form submitted successfully!";
        successMessage.style.color = "green";

        // Clear form fields
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('message').value = "";
        document.getElementById('contactMethodPhone').checked = false;
        document.getElementById('contactMethodEmail').checked = false;

        // Prevent form submission
        return false;
    } else {
        // Prevent form submission
        return false;
    }
}
