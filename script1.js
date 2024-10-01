alert("Welcome!")

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = form.querySelector('input[name="name"]');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/;
    return re.test(String(email).toLowerCase());
}