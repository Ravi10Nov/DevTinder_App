import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Signup = ()=>{

    const [user , setUser] = useState({
        firstName:'',
        lastName:'',
        emailId:'',
        password:''
    });

    const [message , setMessage] = useState('');

    const nevigate = useNavigate();

    const handleChange = (e) =>{
        setUser({...user , [e.target.name]:e.target.value})
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        try{
            const res = await axios.post(BASE_URL+"signup",user,{withCredentials:true});
            setMessage(res.data.message);
            nevigate('/login')

        }catch(err){
            setMessage(err.response.data.message)
        }
    }
    return(
        <div className="flex justify-center my-2">
             <div className="card bg-base-300 w-96 shadow-xl" data-theme="dark">
                <div className="m-4 p-4">
                <h1 className="text-3xl">Signup Now</h1>
                <label className="input input-bordered flex items-center gap-2 my-8">
                    <input type="text" className="grow" placeholder="First Name" name="firstName" onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 my-8">
                    <input type="text" className="grow" placeholder="Last Name" name="lastName" onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" name="emailId" onChange={handleChange}/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" placeholder="password" name="password" onChange={handleChange}/>
                </label>
                <button className="btn btn-neutral w-80 my-8 " onClick={handleSubmit}>Signup</button>
                <p className="text-rose-700 my-2">{message}</p>
                <p className="">Already have account? <span className="cursor-pointer"><Link to="/login"> Please Login</Link></span></p>
                </div>
            </div>
        </div>
    )
};

export default Signup ;