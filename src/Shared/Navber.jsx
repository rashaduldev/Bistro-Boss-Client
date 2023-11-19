import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
const {user,signOut}=useContext(AuthContext);

const handleSignout=() => {
  signOut()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  })
};

  const navitems=
    <>
    <li><a><Link to={'/'}>Home</Link></a></li>
    <li><a><Link to={'/menu'}>Menu</Link></a></li>
    <li><a><Link to={'/order/salad'}>Our Shop</Link></a></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navitems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navitems}
    </ul>
  </div>
  <div className="navbar-end">
  {user? <button className=""><Link to={'/login'}>Sign Out</Link></button>
    :<button><a><Link to={'/login'}>Log in</Link></a></button>}
  </div>
</div>
        </div>
    );
};

export default Navber;