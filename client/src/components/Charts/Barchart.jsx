import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';


const BarChart = ({serverData}) => {

    const [filed ,setFiled] = useState("pestle");

    let uniqueSectors = [];
    
    //using forEach because it doesn't return any array and we are adding unique sector names to an array
    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i[filed]) &&i[filed] !== "") {
            uniqueSectors.push(i[filed]);
        }
    })

    // counting the total number of projects in each sector uniquely
    const sectorCount = uniqueSectors.map((item) => {
        return {
            [filed]: item,
            count: serverData.filter((i) => i[filed] === item).length
        }
    })
    

    return (
        <div className="shadow-2xl mx-[3vw] my-1 bg-white rounded-lg p-2 w-[94vw] h-[60vh] overflow-y-auto overflow-x-auto  ">
        <h1 className="font-bold">Bar Chart- represents number of projects in each {filed}</h1>

        <div style={{ height:'50vh'}}>
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
            <Bar
                data={{
                    labels: uniqueSectors.map(e=>e),
                    datasets: [
                        {
                            label: 'Total Projects',
                            data: sectorCount.map(e=>e.count),
                            borderWidth: 1,

                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    }
                }}
                height={300}
                
            />
        </div>
        </div>
    )
}

export default BarChart