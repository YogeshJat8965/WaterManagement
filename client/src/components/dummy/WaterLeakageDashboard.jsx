import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const WaterLeakageDashboard = () => {
    const [data, setData] = useState([]);
    const [leakMessages, setLeakMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data');
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Network response was not ok: ${text}`);
                }
                const result = await response.json();
                console.log('Fetched data:', result); // Log the fetched data
                setData(result);

                const leaks = result.filter(row => row.status === 'leak_detected');
                const messages = leaks.map(leak => `Leak detected at ${leak.address} (Sensor ID: ${leak.sensor_id})`);
                setLeakMessages(messages.length > 0 ? messages : ['No leaks detected']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 3000);

        return () => clearInterval(interval);
    }, []);

    const timestamps = data.map(row => row.timestamp);
    const waterFlowRates = data.map(row => row.water_flow_rate);
    const leakTimestamps = data.filter(row => row.status === 'leak_detected').map(row => row.timestamp);
    const leakFlowRates = data.filter(row => row.status === 'leak_detected').map(row => row.water_flow_rate);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: 0 }}>
            <h1>Real-Time Water Leakage Dashboard</h1>
            <div style={{ display: 'flex', width: '100%', height: '70%' }}>
                <div style={{ flex: 1, padding: 10 }}>
                    <Plot
                        data={[
                            {
                                x: timestamps,
                                y: waterFlowRates,
                                mode: 'lines+markers',
                                name: 'Water Flow Rate'
                            },
                            {
                                x: leakTimestamps,
                                y: leakFlowRates,
                                mode: 'markers',
                                name: 'Leak Detected',
                                marker: { color: 'red', size: 10 }
                            }
                        ]}
                        layout={{
                            title: 'Water Flow Rate and Leak Detection',
                            xaxis: { title: 'Time' },
                            yaxis: { title: 'Water Flow Rate (liters/min)' }
                        }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                {/* <div style={{ flexBasis: '20%', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="path/to/your/image.jpg" alt="Water Leakage Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </div> */}
            </div>
            {/* <div style={{ width: '100%', textAlign: 'center', padding: 10 }}>
                {leakMessages.map((message, index) => <div key={index}>{message}</div>)}
            </div> */}
        </div>
    );
};

export default WaterLeakageDashboard;
