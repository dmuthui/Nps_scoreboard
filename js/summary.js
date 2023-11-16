document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("npsChart").getContext("2d");
    const data = {
        labels: ["Sad", "Neutral", "Happy"],
        datasets: [{
            data: [30, 20, 50], // Replace with your actual data percentages
            backgroundColor: ["#EF5350", "#FFCA28", "#66BB6A"],
        }],
    };

    const summaryChart = new Chart(ctx, {
        type: "pie",
        data: data,
    });

    // Include this to render the chart
    summaryChart.update();
});