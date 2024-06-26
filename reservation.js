
function validateForm() {

    document.getElementById('date-error').textContent = '';
    document.getElementById('phoneNum-error').textContent = '';
    document.getElementById('numGuest-error').textContent = '';
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('time-error').textContent = '';


    var date = document.getElementById('date').value;
    var phoneNum = document.getElementById('phoneNum').value;
    var numGuest = document.getElementById('numGuest').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var time = document.getElementById('time').value;


    var valid = true;

    var dateYear = new Date(date).getFullYear();
    if (dateYear !== 2024) {
        document.getElementById('date-error').textContent = 'Please select a date in the year 2024.';
        valid = false;
    }

    if (!phoneNum.startsWith('09') || phoneNum.length !== 11) {
        document.getElementById('phoneNum-error').textContent = 'Phone number must start with 09 and be 11 digits.';
        valid = false;
    }


    if (numGuest > 25) {
        document.getElementById('numGuest-error').textContent = 'Number of guests cannot exceed 25.';
        valid = false;
    }

    if (name.length < 5) {
        document.getElementById('name-error').textContent = 'Name must be 5 characters or more.';
        valid = false;
    }


    if (!email.endsWith('@gmail.com')) {
        document.getElementById('email-error').textContent = 'Email must be in Gmail format.';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }


    var selectedTime = new Date('1970-01-01T' + time + ':00');
    var startTime = new Date('1970-01-01T10:00:00');
    var endTime = new Date('1970-01-01T22:00:00');
    if (!(time === '10:00' || (selectedTime >= startTime && selectedTime <= endTime))) {
        document.getElementById('time-error').textContent = '10 am to 10pm only';
        valid = false;
    }

    if (!valid) {
        return false;
    }

    alert('Reservation successfully made!');
    return true;
}
function toggleMenu() {
    const menuToggle = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
}