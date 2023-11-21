import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from  'react-loader-spinner'


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if (loading) {
        console.log('loading');
    //   return  <span className="loading loading-ring loading-lg"></span>
    return    <div className="text-center mx-auto flex justify-center py-10">
        <CirclesWithBar 
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
    </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from:location }} replace></Navigate>
};

export default PrivetRoute;