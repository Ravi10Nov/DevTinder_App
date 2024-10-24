import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Signup from "./components/Signup";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import ChangePassword from "./components/ChangePassword";

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editProfile" element = {<EditProfile />} />
              <Route path="/connections" element = {<Connections />} />
              <Route path="/requests" element = {<Requests />} />
              <Route path="/changePassword" element = {<ChangePassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
