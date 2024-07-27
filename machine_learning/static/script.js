document.addEventListener("DOMContentLoaded", function() {
    fetch("http://127.0.0.1:5000/clusters")
        .then(response => response.json())
        .then(data => {
            var waterUsage = [];
            var pressure = [];
            var householdId = [];
            var cluster = [];
            
            data.forEach(item => {
                waterUsage.push(item.water_usage);
                pressure.push(item.pressure);
                householdId.push(item.household_id);
                cluster.push(item.cluster);
            });

            var trace1 = {
                x: waterUsage,
                y: pressure,
                mode: 'markers',
                marker: {
                    color: cluster,
                    colorscale: 'Viridis',
                    showscale: true
                },
                text: householdId,
                hoverinfo: 'text'
            };

            var data = [trace1];

            var layout = {
                title: 'Clusters of Households Based on Water Usage and Pressure',
                xaxis: {
                    title: 'Water Usage'
                },
                yaxis: {
                    title: 'Pressure'
                }
            };

            Plotly.newPlot('chart', data, layout);
        })
        .catch(error => console.error('Error:', error));
});
