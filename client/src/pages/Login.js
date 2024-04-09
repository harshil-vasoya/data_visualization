import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../api/login";

function Login()
{
    const [data , setData]= useState({email:'admin@gmail.com',password:'123'});
    const [message,setMessage] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(data,setMessage,()=>{
            navigate("/");
        })
    }
    return (
        <div className="h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div class="flex items-center justify-center h-[76vh]  ">
            {message ? <div class="bg-red-500 text-white p-2 ">{message}</div> : null}
            <div class="w-full max-w-md border p-2 rounded-lg">
                <div class="flex flex-col items-center">
                    <h1 class="text-2xl font-medium text-dark">Login</h1>
                    <form class="w-full mt-6" onSubmit={handleSubmit}>
                        <div class="flex flex-col mb-4">
                            <label for="email" class="mb-2 text-sm text-dark">Email</label>
                            <input className=" h-[6vh]  p-2" type="email" id="email" name="email" required value={data.email} class="px-3 py-2 border border-gray-300" onChange={handleChange}/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label for="password" class="mb-2 text-sm text-dark">Password</label>
                            <input className=" h-[6vh] p-2" type="password" id="password" name="password" required value={data.password} class="px-3 py-2 border border-gray-300" onChange={handleChange} />
                        </div>
                        <button type="submit" class="w-fit p-2 items-center py-2 bg-primary bg-gray-200 border  rounded-lg text-black hover:bg-gray-300">Submit</button>
                        <div className="">
                           <span className="text-sm"> don't have an account? </span> <Link to="/register" className="text-white hover:text-lg">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;