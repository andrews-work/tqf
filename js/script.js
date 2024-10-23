// page loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            setupMobileMenu();
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    console.log("Page loaded:", document.title);
});


// Function to set up mobile menu
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            hamburger.classList.add('hidden');
            closeMenu.classList.remove('hidden');
        });

        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            closeMenu.classList.add('hidden');
            hamburger.classList.remove('hidden');
        });
    }
}
