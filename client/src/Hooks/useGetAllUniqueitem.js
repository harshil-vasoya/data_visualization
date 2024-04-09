import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function useGetAllUniqueitem(item){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/data/getuniqueitem/`+item ,{
            headers:{
                "Content-Type":"application/json",
                "token":Cookies.get("token") 
            }
          });

          if(response.data.status === "OK")
          {
          setData(response.data.data);
          }
          else
          {
            navigate("/login");
          }
        } catch (error) {
          setError(error);
        } 
      };
  
      fetchData();
    }, []);
  
    return [ data, setData, error ];
}

export default useGetAllUniqueitem;