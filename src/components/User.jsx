import axios from "axios";
import { useDispatch } from "react-redux";
import { removeConnection } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constant";


const User = ({ user ,message , setMessage}) => {

    if (!user) return;

    const dispatch = useDispatch();

    let { _id, firstName, lastName, photoUrl, age, gender, skills, about } = user;

    const handleFeed = async (status, id) => {
        try {
            const feed = await axios.post(BASE_URL+"request/send/" + status + "/" + id, {}, { withCredentials: true });
            if(status === 'interested'){
                    setMessage('Connection request send.')
            }else{
                    setMessage('Connection Ignore.')
            }
            setTimeout(()=>{
                setMessage('')
            },1000)
            dispatch(removeConnection(id))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center my-8">
            {user && <div className="card card-compact bg-base-300 w-96 shadow-xl">
                <figure>
                    <img
                        src={photoUrl}
                        alt="userphoto" />
                </figure>
                <div className="card-body text-rose-700 ">
                    <h2 className="card-title text-xl mx-4">{firstName} {lastName}</h2>
                    {age && gender && <h1 className="text-xl mx-4">{age} , {gender}</h1>}
                    <p className="mx-4 text-slate-400 text-xs">{about}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary  w-40" onClick={() => handleFeed("ignored", _id)}>Ignore</button>
                        <button className="btn btn-secondary  w-40" onClick={() => handleFeed("interested", _id)}>Interested</button>
                    </div>
                </div>
                {message && <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>{message}</span>
                    </div>
                </div>}
            </div>}
        </div>
    )
};

export default User;