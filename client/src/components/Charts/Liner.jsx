import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = ({serverData}) => {

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
        <h1 className="font-bold">Line Chart - Number of Projects As Per {filed}</h1>

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
            <Line
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i=>i.count),
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

export default LineChart