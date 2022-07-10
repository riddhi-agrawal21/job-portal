import "./App.css";
import "antd/dist/antd.css";
//import { Button } from "antd";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
//import { css } from "@emotion/react";
import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";
 import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";

function App() {
 const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers())
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
      {/* <Route path="/" exact component={Home}  />
      <Route path="/appliedjobs"  exact component={AppliedJobs}   />
      <Route path="/profile" exact component={Profile}  /> 
      <Route path="/jobs/:id" exact component={JobInfo}  />
      <Route path="/postjob" exact component={PostJob}  /> */}

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} /> 

        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute path="/appliedjobs" exact component={AppliedJobs} />
        <ProtectedRoute path="/postjob" exact component={PostJob} />

        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/jobs/:id" exact component={JobInfo} />

        <ProtectedRoute path="/posted" exact component={PostedJobs} />

        <ProtectedRoute path="/editjob/:id" exact component={EditJob} />
        <ProtectedRoute path="/users/:id" exact component={UserInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Redirect to="/login" />;
  } else {
   return <Route {...props} />;
  }
}