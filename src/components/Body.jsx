import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const Body = () => {

    const dispatch = useDispatch();
    const nevigate = useNavigate();

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL+"profile/view", { withCredentials: true });
            dispatch(addUser(res.data));
        } catch (err) {
            if(err.status === 401 || err.status === 400){
                nevigate("/login")
            }

        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return (
        <div >
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Body;