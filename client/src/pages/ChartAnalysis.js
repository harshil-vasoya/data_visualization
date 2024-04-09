import useGetAllData from "../Hooks/useGetAllData";
import Liner from "../components/Charts/Liner";
import BarChart from "../components/Charts/Barchart";
import PolarChart from "../components/Charts/Polar";
import DoughnutChart from "../components/Charts/Doughnut";
import PieRadar from "../components/Charts/PieRadar";
import Temp from "../components/Charts/Temp";


function Analitycs() {

    const [data]=useGetAllData();
  return (
    <div className="bg-gray-200 p-2">
      {/* <span className="font-bold">Chart Analysis</span> */}

      <div className="font-bold text-sm item-center align-middle w-[80vw]">You can change the filed of charts using drop Down Menu</div>


      <div className="shadow-2xl mx-[3vw] my-1 bg-white rounded-lg p-2 w-[94vw]   h-[60vh] ">
        <Liner  serverData={data}/>
      </div>
      <PieRadar serverData={data}/>
      
        <BarChart  serverData={data}/>

      

      
      <div className="shadow-2xl mx-[3vw] my-1 bg-white rounded-lg p-2 w-[94vw] h-[60vh] overflow-y-auto overflow-x-auto  ">
        <h1 className="font-bold">Polar Area and Doughnut Charts - represents number of countries, sectors, topics, pestles, sources, etc are involved</h1>

        <div className="flex">
          <div className="m-1">
        <PolarChart  serverData={data}/></div>
        <div className="m-1">
        <DoughnutChart serverData={data} /></div>
        </div>
      </div> 
      

     
      
    </div>
  );
}

export default Analitycs;