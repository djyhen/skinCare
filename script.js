// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Handle 'Add to Cart' buttons
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = button.closest('.box').querySelector('h3').innerText;
            alert(`"${productName}" a été ajouté au panier !`);
        });
    });

    // Handle 'Heart' (wishlist) buttons
    const heartButtons = document.querySelectorAll('.fa-heart');
    heartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                alert("Ajouté aux favoris !");
                button.style.color = 'red';
            } else {
                alert("Retiré des favoris.");
                button.style.color = '';
            }
        });
    });

    // Handle 'Share' buttons
    const shareButtons = document.querySelectorAll('.fa-share');
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Lien du produit copié pour le partage !");
            // In real usage, navigator.share() or clipboard API can be used
        });
    });

    // Handle user icon click (login simulation)
    const userIcon = document.querySelector('.fa-user');
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirection vers la page de connexion...");
        // location.href = 'login.html'; // Uncomment if you have a login page
    });
});
