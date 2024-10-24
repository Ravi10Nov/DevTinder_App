import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Requests = () => {

    const dispatch = useDispatch();

    const nevigate = useNavigate();

    const requestUsers = useSelector(store => store.requests);

    const [message, setMessage] = useState("");

    const getRequests = async () => {

        try {
            const requests = await axios.get(BASE_URL+"user/requests/received", { withCredentials: true });
            dispatch(addRequests(requests.data))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRequests();
    }, [message])

    const handleRequest = async (status, id) => {
        try {
            const res = await axios.post(BASE_URL+"request/review/" + status + "/" + id, {}, { withCredentials: true });
            dispatch(removeRequests(id));
            setMessage("Connection "+ status);
            setTimeout(()=>{
                setMessage("");
            },1000)
        } catch (err) {
            console.log(err)
        }
    }

    if (requestUsers.length <=0) return <h1 className="flex justify-center my-32 text-3xl">No request found</h1>

    return (
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="w-16 m-auto my-2 text-xl">Requests</h1>
            </div>
            {requestUsers && requestUsers.map((request) => (
                <div className="my-2 w-96 m-auto" key={request._id}>
                    <div className="card card-side bg-base-100 shadow-xl bg-base-300">
                        <div className="flex">
                            <figure className="w-16">
                                <img
                                    src={request.fromUserId.photoUrl}
                                    alt="photo" className="rounded-full" />
                            </figure>
                            <div className="card-body w-40">
                                <p className="card-title">{request.fromUserId.firstName + " " + request.fromUserId.lastName}</p>
                                {request.fromUserId.age && request.fromUserId.gender && <p className="card-title">{request.fromUserId.age + ", " + request.fromUserId.gender}</p>}
                            </div>
                            <div className="flex w-4 m-auto ">
                                <button className="btn btn-primary mx-2 w-16" onClick={() => handleRequest("rejected", request.fromUserId._id)} >Reject</button>
                                <button className="btn btn-secondary  w-16" onClick={() => handleRequest("accepted", request.fromUserId._id)} >Accept</button>
                            </div>
                            {message && <div className="toast toast-top toast-center">
                                <div className="alert alert-success">
                                    <span>{message}</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Requests;