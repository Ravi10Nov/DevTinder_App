import { useSelector } from "react-redux";


const Profile = () =>{

    const user = useSelector(store => store.user);

    return (
        <div>
            <h1>
                {user && <div className="flex justify-center mx-16 my-4">
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={user.photoUrl}
                                    alt="userphoto" />
                            </figure>
                            <div className="card-body text-rose-700 ">
                                <h2 className="card-title text-xl mx-4">{user.firstName} {user.lastName}</h2>
                                {user.age && user.gender&& <h1 className="text-xl mx-4">{user.age} , {user.gender}</h1>}
                                <p className="mx-4 text-slate-400 text-xs">{user.about}</p>
                                <h2 className="mx-4 text-slate-400 text-xs">Skills - {user.skills}</h2>
                            </div>
                        </div>
                    </div>}
            </h1>
        </div>
    )
}

export default Profile;