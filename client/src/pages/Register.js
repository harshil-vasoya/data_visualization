import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signIn from "../api/signin";

function Register()
{
    const [data , setData]= useState({name:'',email:'',password:'',cpassword:''});
    const [message,setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(data,setMessage,()=>{
            navigate("/");
        })
    }
    return (
        <div class="flex items-center justify-center h-[100vh]   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div class="w-full max-w-md border p-2 border-white rounded-lg">
                <div class="flex flex-col items-center">
                    <h1 class="text-2xl font-medium text-primary">Register</h1>
                    <form class="w-full mt-6" onSubmit={handleSubmit}>
                        <div class="flex flex-col mb-4">
                            <label for="name" class="mb-2 text-sm">Name</label>
                            <input type="text" id="name" name="username" required class="px-3 py-2 border border-gray-300" onChange={handleChange}/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label for="email" class="mb-2 text-sm">Email</label>
                            <input type="email" id="email" name="email" required class="px-3 py-2 border border-gray-300" onChange={handleChange}/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label for="password" class="mb-2 text-sm">Password</label>
                            <input type="password" id="password" name="password" required class="px-3 py-2 border border-gray-300" onChange={handleChange} />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label for="Cpassword" class="mb-2 text-sm">CPassword</label>
                            <input type="password" id="Cpassword" name="cpassword" required class="px-3 py-2 border border-gray-300" onChange={handleChange} />
                        </div>
                        <button class="w-fit p-2 items-center py-2 bg-primary bg-gray-200 border  rounded-lg text-black hover:bg-gray-300">Submit</button>
                        <div>
                            <span class="text-sm"> Already have an account? </span> <Link to="/login" class="text-white">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;