import React from 'react';
import { Pie, Radar } from 'react-chartjs-2';
import { useState } from 'react';
function PieRadar({serverData})
{
    const PieChart = () => {
    const [filed ,setFiled] = useState("pestle");

        // Extract unique pestle values
        const uniquePestle = serverData.reduce((acc, curr) => {
            if (curr[filed] && !acc.includes(curr[filed])) {
                acc.push(curr[filed]);
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
                [filed]: item,
                count: serverData.filter((i) => i[filed] === item).length
            }
        });
    
        return (
            <>
        <h1 className="font-bold">Pie Chart  represents number of projects as per {filed}</h1>

            <div style={{ height: '50vh', width: '45vw' }}>
            <div>
                <select className='border border-gray-300 py-1 px-2 rounded-lg' onChange={(e)=>{setFiled(e.target.value)}} >
                <option value="pestle">pestle</option>
                <option value="region">region</option>
                    <option value="sector">sector</option>
                    <option value="insight">insight</option>
                    <option value="topic">topic</option>
                <option value="country">country</option>

    
                </select>
            </div>
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
            </>
        );
    };


    const RadarChart = () => {

        const [filed ,setFiled] = useState("pestle");
    
        let uniquePestle = [];
        serverData.forEach((i) => {
            if (!uniquePestle.includes(i[filed]) && i[filed] !== "") {
                uniquePestle.push(i[filed]);
            }
        })
    
        const pestleCount = uniquePestle.map((item) => {
            return {
                pestle: item,
                count: serverData.filter((i) => i[filed] === item).length
            }
        })
    
      return (
        <>
        <h1 className="font-bold">Radar Chart represents number of projects as per {filed}</h1>

        <div style={{ height:'50vh', width:'45vw'}}>
              <div>
                <select className='border border-gray-300 py-1 px-2 rounded-lg' onChange={(e)=>{setFiled(e.target.value)}} >
                <option value="pestle">pestle</option>
                <option value="region">region</option>
                    <option value="sector">sector</option>
                    <option value="insight">insight</option>
                    <option value="topic">topic</option>
                <option value="country">country</option>

    
                </select>
            </div>
                <Radar
                    data={{
                        labels: uniquePestle,
                        datasets: [
                            {
                                label: "Projects ",
                                data: pestleCount.map(i=>i.count),
                                hoverOffset: 30,
                                borderWidth: 1,
                            },
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                type: 'linear',
                                beginAtZero: true
                            },
                        }
                    }}
                    height={300}
                />
            </div>
            </>
      )
    }

    return(
        <>
        
        <div className="shadow-2xl mx-[3vw] mt-1 bg-white rounded-lg p-2 w-[94vw] overflow-y-auto overflow-x-auto  h-[60vh] ">

        <div className="flex">
          <div className="m-1">
        <RadarChart  /></div>
        <div className="m-1">
        <PieChart  />
        </div>
        </div>
      </div>
        </>
    )
}

export default PieRadar;