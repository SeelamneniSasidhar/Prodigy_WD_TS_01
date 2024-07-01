document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    let navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each navigation link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove 'active' class from all links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            navLink.classList.add('active');

            // Get the section/page from the data-section attribute
            let sectionId = navLink.getAttribute('data-section');

            // Redirect to the corresponding section/page
            if (sectionId) {
                window.location.href = sectionId;
            }
        });
    });
});
