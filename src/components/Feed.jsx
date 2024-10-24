import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import User from "./user";
import { BASE_URL } from "../utils/constant";

const Feed = () =>{

    const dispatch = useDispatch();

    const feed = useSelector(store => store.feed);
    const [message, setMessage] = useState('');

    const users = async () =>{
        try{
            const users = await axios.get(BASE_URL+"user/connection/feed",{withCredentials:true});
            dispatch(addFeed(users.data));
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        users();
    },[message])

    if(!feed) return;

    if (feed.length <= 0) return <h1 className="flex justify-center my-32 text-3xl">No new user found</h1>

    return(
        <div className="">
            {feed && <User user = {feed[0]} message={message} setMessage={setMessage}/>}
        </div>
    )
};

export default Feed;