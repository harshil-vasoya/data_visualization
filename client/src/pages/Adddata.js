import { useState } from "react";
import useGetAllUniqueitem from "../Hooks/useGetAllUniqueitem";
import Cookies from "js-cookie";

function Adddata() {

    const [data, setData] = useState({});

    const [sector] = useGetAllUniqueitem("sector");
    const [topic] = useGetAllUniqueitem("topic");
    const [pestle] = useGetAllUniqueitem("pestle");
    const [region] = useGetAllUniqueitem("region");
    const [country] = useGetAllUniqueitem("country");


    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handlesubmit(e)
    {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/data/addData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": Cookies.get("token")
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then((response) => {
                if (response.status === "OK") {
                    alert("Data Added Successfully");
                }
                else {
                    console.log(response)
                    alert("Failed to Add Data");
                }
            }).catch((error) => {
                console.log(error);
        })
    }


    return (
        <div>
            <h1>Add Data</h1>
            <form onSubmit={handlesubmit}>
                <div>
                <input type="text" placeholder="Enter EndYear like 2020" className="p-2 m-1 border border-black rounded-lg" name="end_year"  onChange={handleChange}/>
                <input type="number" placeholder="Enter Intensity like 1" className="p-2 m-1 border border-black rounded-lg" name="intensity"  onChange={handleChange}/>
                <input type="number" placeholder="Enter Relevance like 1 ,2 ,3" className="p-2 m-1 border border-black rounded-lg" name="relevance"  onChange={handleChange}/>
                </div>
              
        <div>
                <textarea type="text" placeholder="Enter Insight" className="p-2 m-1 border border-black rounded-lg w-[70vw]" col={2} name="insight"  onChange={handleChange}/>
                </div>
                <div>
                <input type="text" placeholder="Enter Url" className="p-2 m-1 border border-black rounded-lg w-[70vw]" name="url"  onChange={handleChange}/>
               
                </div>

               <div>                <label id="added"> Enter Added Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="date" placeholder="Enter Added Date" className="p-2 m-1 border border-black rounded-lg ms-2" id="added" name="added"  onChange={handleChange}/>
                </div>
        <div>
                <label id="added"> Enter Published Date</label>
                <input type="date" placeholder="Enter Published Date" className="p-2 m-1 border border-black rounded-lg ms-2" name="published"  onChange={handleChange}/>

                </div>


               <div>
                <input type="text" placeholder="Enter Source" className="p-2 m-1 border border-black rounded-lg w-[50vw]" name="source"  onChange={handleChange}/>
                </div>
                <div>
                <input type="text" placeholder="Enter Title" className="p-2 m-1 border border-black rounded-lg w-[50vw]" name="title"  onChange={handleChange}/>
                </div>
                <input type="number" placeholder="Enter Likelihood" className="p-2 m-1 border border-black rounded-lg" name="likelihood"  onChange={handleChange}/>
                <div>
                {
                    country ?
                        <select name="country" className="p-2 m-1 border border-black rounded-lg"  onChange={handleChange}>
                            <option value="">Select Country</option>
                            {country.map((item, index) => (
                                <option value={item} key={index} >{item}</option>
                            ))}
                        </select> : null
                }
                {
                    pestle ?
                        <select name="pestle" className="p-2 m-1 border border-black rounded-lg" onChange={handleChange} >
                            <option value="">Select Pestle</option>
                            {pestle.map((item, index) => (
                                <option value={item} key={index} >{item}</option>
                            ))}
                        </select> : null
                }
                 {
                    region ?
                        <select name="region" className="p-2 m-1 border border-black rounded-lg"  onChange={handleChange}>
                            <option value="">Select Region</option>
                            {region.map((item, index) => (
                                <option value={item} key={index} >{item}</option>
                            ))}
                        </select>
                        : null
                }
                </div>
                  {
                    sector ?
                        <select name="sector" className="p-2 m-1 border border-black rounded-lg"  onChange={handleChange}>
                            <option value="">Select Sector</option>
                            {sector.map((item, index) => (
                                <option value={item} key={index} >{item}</option>
                            ))}
                        </select>
                        : null
                }
                {
                    topic ?
                        <select name="topic" className="p-2 m-1 border border-black rounded-lg"  onChange={handleChange}>
                            <option value="">Select Topic</option>
                            {topic.map((item, index) => (
                                <option value={item} key={index} >{item}</option>
                            ))}
                        </select>
                        : null
                }

<select name="impact" className="p-2 m-1 border border-black rounded-lg" onChange={handleChange} >
                    <option value="">Select Impact</option>
                    <option value="3">High</option>
                    <option value="2">Low</option>
                    <option value="1">Medium</option>
                </select>
                <div>
                <button className="bg-blue-500 p-2 border rounded-lg text-white text-xl hover:text-2xl">submit</button>
                </div>
            </form>
        </div>
    );
}
export default Adddata;