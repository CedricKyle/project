
function toggleMenu() {
    const menuToggle = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (name.length < 5) {
        alert("Please enter a name with at least 5 characters.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (subject === '') {
        alert("Please enter a subject.");
        return;
    }

    if (message === '') {
        alert("Please enter a message.");
        return;
    }
    
    alert("Your message has been delivered.");

    document.getElementById('contact-form').reset();
});