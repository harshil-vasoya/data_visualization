import useGetDataByPage from "../../Hooks/useGetdatabypage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import DataShow from "../../components/Card/DataShow";
import useGetAllUniqueitem from "../../Hooks/useGetAllUniqueitem";


// filter data , search by region , country , pestle , sector


function Dashboard() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [flag , setFlag] = useState(false);
    const [uniqueRegion]=useGetAllUniqueitem("region");
    const [uniqueTopic]=useGetAllUniqueitem("topic");
    const [uniquePestle] = useGetAllUniqueitem("pestle");
    const [uniqueSector] = useGetAllUniqueitem("sector");
    const [uniqueCountry]= useGetAllUniqueitem("country");

    const [tempunEndyear]=useGetAllUniqueitem("end_year");
    const [selectedEndYear, setSelectedEndYear] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedPestle, setSelectedPestle] = useState("");
    const [selectedSector, setSelectedSector] = useState("");

    const [error, setError] = useState(null);   


    const url = `${process.env.REACT_APP_SERVER_URL}/api/v1/data/getdatabypage?page=${page}&end_year=${selectedEndYear}&topic=${selectedTopic}&country=${selectedCountry}&region=${selectedRegion}&pestle=${selectedPestle}&sector=${selectedSector}`

    const navigate = useNavigate();


    // fill tempdata for the search
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/data/getDataByPage?page=${page}`, 
        {
            headers:{
                "Content-Type":"application/json",
                "token":Cookies.get("token") 
            }
        }).
        then(response => response.json())
        .then((response) => {
            if(response.status === "OK")
            {
                setData(response.data);
            }
            else{
                navigate("/login")
            }
        }).catch((error) => {
            setError(error);
        })
    } , [])
    const [uniqueEndYear, setUniqueEndYear] = useState([]);
    useEffect(()=>{
        setUniqueEndYear(tempunEndyear.sort((a, b) => a - b));
    },[tempunEndyear]);

    async function  filtter()
{
console.log(selectedPestle)
    await fetch(url , 
    {
        headers:{
            "Content-Type":"application/json",
            "token":Cookies.get("token") 
        }
    })
        .then(response => response.json())
        .then((response) => {
            if (response.status === "OK") {
                setData(prevData => [...response.data]);
               
            } else {
                setFlag(false) // No more data available
            }
        }).catch((error) => {
            console.log(error);
        })

    
}


    // get data , end of page
    const fetchData = async() => {
        setFlag(true);
        await fetch(url , 
        {
            headers:{
                "Content-Type":"application/json",
                "token":Cookies.get("token") 
            }
        })
            .then(response => response.json())
            .then((response) => {
                if (response.status === "OK") {
                    setData(prevData => [...prevData, ...response.data]);
                   
                } else {
                    setFlag(false) // No more data available
                }
            }).catch((error) => {
                console.log(error);
            })
            setFlag(false);
    }
   
    return (
        <div className=" h-[86vh] w-[100%]">
            {/* select End Year */}
            <select value={selectedEndYear} onChange={(e)=>{setSelectedEndYear(e.target.value) ; }} className="p-2 m-1 border border-black rounded-lg  overflow-auto" >
            <option value="">Select End Year</option>
            {uniqueEndYear ?
                uniqueEndYear.map((item, index) => (
                    <option value={item} key={index} >{item}</option>
                )) : null
            }
            </select>

            {/* select Topic */}
            <select value={selectedTopic} onChange={(e)=>{setSelectedTopic(e.target.value) ; }} className="p-2 m-1 border border-black rounded-lg  overflow-auto" >
            <option value="">Select Topic</option>
            {uniqueTopic ?
                uniqueTopic.map((item, index) => (
                    <option value={item} key={index} >{item}</option>
                )) : null
            }
            </select>
            {/* serch by sector */}
            <select value={selectedSector} onChange={(e)=>{setSelectedSector(e.target.value) ; }} className="p-2 m-1 border border-black rounded-lg overflow-auto" >
            <option value="">Select Sector</option>
            {uniqueSector ? 
             uniqueSector.map((item, index) => (
                    <option value={item} key={index} >{item}</option>
            )) : null 
            }
            </select>
            {/* serch by Region */}
                <select value={selectedRegion} onChange={(e)=>{setSelectedRegion(e.target.value) ; }} className="p-2 m-1 border border-black rounded-lg  overflow-auto" >
            <option value="">Select Region</option>
            {uniqueRegion ? 
             uniqueRegion.map((item, index) => (
                    <option value={item} key={index} >{item}</option>
            )) : null 
            }
            </select>

            {           /* select by pestle */}

<select value={selectedPestle} onChange={(e)=>{setSelectedPestle(e.target.value) ; }} className="p-2 m-1 border border-black rounded-lg  overflow-auto" >
<option value="">Select Pestle</option>
{uniquePestle ? 
 uniquePestle.map((item, index) => (
        <option value={item} key={index} >{item}</option>
)) : null 
}
</select>
            {/* search by country */}
            
            <select value={selectedCountry} onChange={(e)=>{setSelectedCountry(e.target.value) ;}} className="p-2 m-1 border border-black rounded-lg  overflow-auto" >
            <option value="">Select Country</option>
            {uniqueCountry ? 
             uniqueCountry.map((item, index) => (
                    <option value={item} key={index} >{item}</option>
            )) : null 
            }
            </select>

            {/* search button */}
            <button className="bg-blue-500 p-2 text-white border rounded-md hover:text-lg" onClick={()=>{filtter()}}>Search filter</button>
            

            {/* cancle filter */}
            <button className="bg-red-500 p-2 text-white border rounded-md hover:text-lg" onClick={()=>{setSelectedEndYear(""); setSelectedTopic(""); setSelectedCountry(""); setSelectedRegion(""); setSelectedPestle(""); setSelectedSector("");}}>Cancle filter</button>

                    <div className="bg-gray-200 shadow-2xl w-[96vw]  grid grid-cols-3 gap-4 mx-[3vw] mt-2 p-2 rounded-lg">
            
            {/* map all data into card */}
                {data ? data.map((item, index) => (
                        <DataShow data={item}   key={index} />
                )) : null}
                    </div>

                {flag ? <h1>Loading...</h1> : null}

                {/* loading more data */}
                <button className="bg-blue-600 text-white rounded-lg shadow-xl px-2 py-1 m-2 text-xl hover:px-3 hover:py-2" onClick={()=>{setPage(pre=>pre+1);fetchData()}}>more data</button>
        </div>
    );
}

export default Dashboard;
