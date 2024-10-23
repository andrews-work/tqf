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
            
            // Set max-height to its scroll height for a smooth transition
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        });

        closeMenu.addEventListener('click', function() {
            // Collapse the menu
            mobileMenu.style.maxHeight = '0';
            closeMenu.classList.add('hidden');
            hamburger.classList.remove('hidden');

            // Use a timeout to add the hidden class after the transition
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Adjust timeout to match your CSS transition duration
        });
    }
}

// Call the setup function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupMobileMenu);
