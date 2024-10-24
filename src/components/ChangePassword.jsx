import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";


const ChangePassword = () => {

    const [userNewPasword , setUserNewPassword] = useState({
        newPassword:'',
        confirmPassword:''
    })

    const [message ,setMessage] = useState('');

    const nevigate = useNavigate();

    const handlePassword = (e) =>{
        setUserNewPassword({...userNewPasword ,[e.target.name]:e.target.value});
    }

    const changePassword = async () =>{

        try{
            const res = await axios.patch(BASE_URL+"changePassword",userNewPasword,{withCredentials:true});
            setMessage(res.data.message)
            setTimeout(()=>{
                nevigate('/profile')
            },1000)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center my-16">
            <div className="card bg-base-300 w-96 shadow-xl" data-theme="dark">
                <div className="m-4 p-4">
                    <h1 className="text-3xl">Change Password</h1>
                    <label className="input input-bordered flex items-center gap-2 my-8">
                        <input type="text" className="grow" placeholder="Enter new password" name="newPassword" onChange={handlePassword} />
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
                        <input type="password" className="grow" placeholder="Re-enter password" name="confirmPassword" onChange={handlePassword} />
                    </label>
                    <button className="btn btn-neutral w-80 my-8 " onClick={changePassword}>Change Password</button>
                </div>
                {message && <div className="toast toast-top toast-center">
                        <div className="alert alert-success">
                            <span>{message}</span>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ChangePassword;