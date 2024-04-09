
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ serverData }) => {
    // Extract unique pestle values
    const uniquePestle = serverData.reduce((acc, curr) => {
        if (curr.pestle && !acc.includes(curr.pestle)) {
            acc.push(curr.pestle);
        }
        return acc;
    }, []);

    // Generate random colors for each pestle
    var number = 0.01;

    const getRandomColor = () => {
        number=number+0.18;
        return '#' + Math.floor((number%1)*16777215).toString(16);
    };

    const pestleColors = uniquePestle.map(() => getRandomColor());

    // Count occurrences of each pestle
    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length
        }
    });

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: 'Projects',
                            data: pestleCount.map(i => i.count),
                            backgroundColor: pestleColors, // Assign colors
                            borderWidth: 1,
                            hoverOffset: 20,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                }}
                height={300}
            />
        </div>
    );
};

export default PieChart;
