
function toggleMenu() {
    const menuToggle = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.specialties ul li');
    const displayedImage = document.getElementById('displayed-image');
    let activeItem = null;

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            if (activeItem === item) {
                // If the same item is clicked again, hide the image and remove the active state
                displayedImage.style.display = 'none';
                item.classList.remove('active');
                activeItem = null;
            } else {
                // If a different item is clicked, display the image and set the active state
                const imageUrl = item.getAttribute('data-image');
                displayedImage.src = imageUrl;
                displayedImage.style.display = 'block';

                // Remove active class from previously active item
                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                // Set the clicked item as active
                item.classList.add('active');
                activeItem = item;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.specialties2 ul li');
    const displayedImage = document.getElementById('displayed-image2');
    let activeItem = null;

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            if (activeItem === item) {
                // If the same item is clicked again, hide the image and remove the active state
                displayedImage.style.display = 'none';
                item.classList.remove('active');
                activeItem = null;
            } else {
                // If a different item is clicked, display the image and set the active state
                const imageUrl = item.getAttribute('data-image');
                displayedImage.src = imageUrl;
                displayedImage.style.display = 'block';

                // Remove active class from previously active item
                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                // Set the clicked item as active
                item.classList.add('active');
                activeItem = item;
            }
        });
    });
});