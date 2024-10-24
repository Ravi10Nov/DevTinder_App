import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const Navbar = () => {
  const user = useSelector(store => store.user);
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () =>{
    try{
      await axios.post(BASE_URL+"logout",{},{withCredentials:true});
      dispatch(removeUser());
      nevigate('/login');
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to='/feed' className="btn btn-ghost text-xl"><img src="https://img.freepik.com/premium-vector/3d-vector-tinder-icon-social-media_721791-1533.jpg?w=740" className="w-8 bg-base-100 rounded-full"/>DevTinder</Link>
      </div>
      {user && <div className="flex-none gap-2 mx-4">
            <p className="mx-4"><Link to='/connections'>Connections</Link></p>
            <p className="mx-4"><Link to='/requests'>Requests</Link></p>
            <p className="mx-4"><Link to='/profile'>{user.firstName}</Link></p>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge"><Link to='/editProfile'>Edit</Link></span>
              </Link>
            </li>
            <li><Link>Settings</Link></li>
            <li ><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default Navbar;