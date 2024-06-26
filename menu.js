
function toggleMenu() {
    const menuToggle = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function () {
    showSection('main-course');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.product-list');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'flex';
    }

    const menuLinks = document.querySelectorAll('.category-menu a');
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.category-menu a[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item img');

    productItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(this.src);
        });
    });

    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = src;


    modalImage.onload = function() {
        const modalHeight = modal.clientHeight;
        const imageHeight = modalImage.clientHeight;

        if (imageHeight < modalHeight) {
            modalImage.style.marginTop = `${(modalHeight - imageHeight) / 2}px`;
        }
    };
}
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

function addToCart(button) {
    const productItem = button.parentElement;
    const productName = productItem.querySelector('.name').innerText;
    const productPrice = productItem.querySelector('.price').innerText;
    const productImage = productItem.querySelector('img').src;

    
    if (!isLoggedIn()) {
        
        localStorage.removeItem('cart');
        cart = []; 
        alert('You are logged out. Your cart has been cleared.');
        return;
    }


    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        alert('The item is already added to cart');
    } else {
        
        cart.push({ name: productName, price: productPrice, image: productImage });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Your order has been added to the cart');
    }
}


function isLoggedIn() {
    
    return true; 
}
/*

function clearCartOnLogout() {
    localStorage.removeItem('cart');
    cart = []; 
    alert('You have successfully logged out. Your cart has been cleared.');
}


document.getElementById('logoutButton').addEventListener('click', function() {
    clearCartOnLogout();
    if (userConfirmed) {
        window.location.href = 'login.html';
    }
});*/