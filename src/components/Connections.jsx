import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { BASE_URL } from "../utils/constant";


const Connections = () => {

    const dispatch = useDispatch();

    const connections = useSelector(store => store.connections);

    const getConnections =async () =>{
        try{ 
            const connections =await axios.get(BASE_URL+"user/connections",{withCredentials:true});
            dispatch(addConnection(connections.data.data))
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getConnections();
    },[])

    if (connections.length <=0) return <h1 className="flex justify-center my-32 text-3xl">You don't have any connection</h1>

    return (
        <div className="w-96 m-auto my-16">
            <div>
                <h1 className="w-16 m-auto my-2 text-xl">Connections</h1>
            </div>
            {connections && connections.map((connection)=>(
                <div className="m-2" key={connection._id}>
                <div className="card card-side bg-base-100 shadow-xl bg-base-300">
                    <figure>
                        <img
                            src={connection.photoUrl}
                            alt="photo" className="" / >
                    </figure>
                    <div className="card-body">
                        <p className="card-title">{connection.firstName+" "+connection.lastName}</p>
                        {connection.age&& connection.gender&&<p className="card-title">{connection.age+", "+connection.gender}</p>}
                        <p>{connection.about}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
};

export default Connections;
