import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const EditInput = ({ user }) => {

    const [editUser, setEditUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        age: user.age,
        gender: user.gender,
        about: user.about,
        photoUrl: user.photoUrl,
        skills: user.skills,
    });

    const [message, setMessage] = useState('');

    const nevigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.patch(BASE_URL+"profile/edit", editUser, { withCredentials: true });
            setMessage(res.data.message);
            dispatch(addUser(res.data.user));
            setTimeout(() => {
                nevigate("/profile");
            }, 1000);   
        } catch (err) {
            setMessage(err.response.data);
        };
    };

    return (
        <div className="card bg-base-200  shadow-xl " data-theme="dark">
            {user && <div className="flex justify-evenly">
                <div className="bg-base-300 mx-12 my-1 rounded-2xl">
                    <div className="mx-2 p-2">
                        <h1 className="text-3xl">Edit Profile</h1>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="First Name" name="firstName" onChange={handleChange} value={editUser.firstName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Last Name" name="lastName"
                                onChange={handleChange} value={editUser.lastName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Email" name="emailId" onChange={handleChange} value={editUser.emailId} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Age" name="age" onChange={handleChange} value={editUser.age} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Gender" name="gender" onChange={handleChange} value={editUser.gender} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="About" name="about" onChange={handleChange} value={editUser.about} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Photo" name="photoUrl" onChange={handleChange} value={editUser.photoUrl} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-2">
                            <input type="text" className="grow" placeholder="Skills" name="skills" onChange={handleChange} value={editUser.skills} />
                        </label>

                        <button className="btn btn-neutral w-80 my-2 mx-4" onClick={handleSubmit} >Save Profile</button>
                    </div>
                    {message && <div className="toast toast-top toast-center">
                        <div className="alert alert-success">
                            <span>{message}</span>
                        </div>
                    </div>}
                </div>
                <div className="my-2">
                    <div className="flex justify-center mx-16 bg-base-300 rounded-xl">
                        <div className="card card-compact bg-base-100 w-96 shadow-xl bg-base-300">
                            <figure>
                                <img
                                    src={editUser.photoUrl}
                                    alt="userphoto" />
                            </figure>
                            <div className="card-body text-rose-400">
                                <h2 className="card-title text-xl mx-4">{editUser.firstName} {editUser.lastName}</h2>
                                <h1 className="text-xl mx-4">{editUser.age &&<span>{editUser.age}</span>}{editUser.gender && <span> , {editUser.gender}</span>} </h1>
                                <p className="mx-4 text-slate-400 text-xs">{editUser.about}</p>
                                <p className="mx-4 text-slate-400 text-xs">Skills - {editUser.skills}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default EditInput;