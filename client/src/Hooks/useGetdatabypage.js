import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function useGetDataByPage(pagenumber)
{
    const [data , setData] = useState([]);
    const [error , setError] = useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/data/getDataByPage?page=${pagenumber}`, 
        {
            headers:{
                "Content-Type":"application/json",
                "token":Cookies.get("token") 
            }
        }).
        then(response => response.json())
        .then((response) => {
            console.log(response.data)
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
    } , [pagenumber])

    return [data , setData ,error];
    
}

export default useGetDataByPage;