import { CirclesWithBar } from "react-loader-spinner";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    if (loading || isAdminLoading) {
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
    if (user&&isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from:location }} replace></Navigate>
};

export default AdminRoute;