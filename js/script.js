document.addEventListener("DOMContentLoaded", function () {
    // Function to handle rating submission
    function submitRating(rating) {
        sessionStorage.setItem('selectedRating', rating);
        window.location.href = "landing.html";
    }

    // Get all buttons with the 'emoji' class
    const emojiButtons = document.querySelectorAll('.emoji');

    // Attach click event listeners to each button
    emojiButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            submitRating(rating);
        });
    });
});