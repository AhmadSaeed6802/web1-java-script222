// JavaScript for Interactive Navigation Bar
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff7f50'; // Change link color on hover
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#fff'; // Change link color back to default on mouse leave
    });
});

// JavaScript for Image Switcher
const mainImage = document.getElementById('mainImage');
const switchImageButtons = document.querySelectorAll('.switch-button');
const switchImages = document.querySelectorAll('.switch-image');
const backToMainButton = document.getElementById('backToMainButton');

function switchImage(imageId) {
    switchImages.forEach(image => {
        if (image.id === imageId) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    });
}

function switchToMainImage() {
    switchImage('mainImage');
    backToMainButton.classList.add('hidden');
}

switchImageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imageId = button.getAttribute('data-image');
        if (imageId === 'mainImage') {
            switchToMainImage();
        } else {
            switchImage(imageId);
            backToMainButton.classList.remove('hidden');
        }
    });
});

backToMainButton.addEventListener('click', switchToMainImage);

// JavaScript for Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
        form.reset();
    }
});

function isValidEmail(email) {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
