document.addEventListener("DOMContentLoaded", function () {
    const selectedRating = sessionStorage.getItem('selectedRating');

    document.getElementById("selectedRating").innerText = selectedRating;

    const happyCount = [8, 9, 10].includes(parseInt(selectedRating)) ? 1 : 0;
    const neutralCount = parseInt(selectedRating) === 7 ? 1 : 0;
    const sadCount = [1, 2, 3, 4, 5, 6].includes(parseInt(selectedRating)) ? 1 : 0;

    const totalResponses = happyCount + neutralCount + sadCount;

    const npsScore = Math.round(((happyCount - sadCount) / totalResponses) * 100);

    document.getElementById("npsScore").innerText = npsScore;

    const ctx = document.getElementById("npsChart").getContext("2d");

    const data = {
        labels: ["Happy", "Neutral", "Sad"],
        datasets: [{
            data: [happyCount, neutralCount, sadCount],
            backgroundColor: ["#66BB6A", "#FFCA28", "#EF5350"],
        }],
    };

    const npsChart = new Chart(ctx, {
        type: "pie",
        data: data,
    });
    // Include this to render the individual feedback chart
    npsChart.update();

    // Create the summary pie chart
    const summaryCtx = document.getElementById("summaryChart").getContext("2d");
    const summaryData = {
        labels: ["Sad", "Neutral", "Happy"],
        datasets: [{
            data: [30, 20, 50], // Replace with your actual combined data percentages
            backgroundColor: ["#EF5350", "#FFCA28", "#66BB6A"],
        }],
    };

    const summaryChart = new Chart(summaryCtx, {
        type: "pie",
        data: summaryData,
    });

    // Include this to render the summary chart
    summaryChart.update();
});
