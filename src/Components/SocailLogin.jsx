import { FaGoogle } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublick from "../Hooks/useAxiosPublick";

const SocailLogin = () => {
    const {googleSignin}=useAuth();
    const navigate=useNavigate();
    const Location=useLocation();
    const from=Location.state?.from?.pathname || "/";
    console.log("pathname: ", Location.state);
    const axiosPublic=useAxiosPublick();

    const handleGoogleSignin =()=>{
        googleSignin()
        .then(res=>{
            console.log(res);
            const userInfo={
              email:res.user?.email,
              name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              console.log(res.data);
            });
            // reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
        })
    }
  return (
    <div className="p-4">
      <button 
      onClick={handleGoogleSignin}
      className="btn">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocailLogin;
