function createChart(chartId, chartType, chartLabels, chartData, chartLabel, backgroundColors = null) {
    const ctx = document.getElementById(chartId).getContext("2d");
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: chartLabels,
            datasets: [{
                label: chartLabel,
                data: chartData,
                backgroundColor: backgroundColors || "blue",
                borderColor: "blue",
                borderWidth: 2,
                fill: false
            }]
        }
    });
}

// Original Charts
createChart("laborForceChart", "line", [2014, 2016, 2018, 2020, 2022, 2024], [66, 67, 68, 69, 70, 71], "Labor Force Participation (%)");
createChart("employmentChart", "bar", ["Agriculture", "Construction", "Tech", "Healthcare"], [18, 22, 25, 35], "Employment by Industry (%)");
createChart("economicContributionsChart", "pie", ["Federal Taxes", "State Taxes", "GDP Contribution"], [100, 60, 1800], "Economic Contributions (Billion USD)", ["blue", "red", "green"]);

// NEW Charts
createChart("immigrationTrendsChart", "line", [2014, 2016, 2018, 2020, 2022, 2024], [42, 45, 47, 50, 53, 55], "Total Immigrant Population (Millions)");
createChart("workforceComparisonChart", "bar", ["Native-Born", "Foreign-Born"], [63, 72], "Workforce Participation (%)", ["orange", "blue"]);
createChart("regionalDistributionChart", "doughnut", ["West", "South", "Midwest", "Northeast"], [40, 30, 15, 15], "Regional Distribution (%)", ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]);
createChart("educationChart", "bar", ["Less than HS", "HS Graduate", "Some College", "Bachelor's", "Graduate Degree"], [15, 25, 30, 20, 10], "Educational Attainment (%)");
createChart("industryContributionChart", "horizontalBar", ["Healthcare", "Technology", "Manufacturing", "Construction", "Agriculture"], [120, 180, 140, 100, 80], "Industry Contribution (Billion USD)");
