import { FaGoogle } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";

const SocailLogin = () => {
    const {googleSignin}=useAuth();

    const handleGoogleSignin =()=>{
        googleSignin()
        .then(res=>{
            console.log(res);
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
