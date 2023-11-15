document.addEventListener("DOMContentLoaded", function () {
    function submitRating(rating) {
        sessionStorage.setItem('selectedRating', rating);
        window.location.href = "landing.html";
    }
});