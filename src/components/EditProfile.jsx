import { useSelector } from "react-redux";
import EditInput from "./EditInput";


const EditProfile = ({}) => {

    const user = useSelector(store => store.user);
    return (
        <div className="flex justify-center my-2 ">
            <div className="">
                {user && <EditInput user={user}/>}
            </div>
        </div>
    )
};

export default EditProfile;