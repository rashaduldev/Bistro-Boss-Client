import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignout = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfully");
        let timerInterval;
        Swal.fire({
          title: "LogOut Successfully, Please Login Again!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navitems = (
    <>
      <li>
        <a>
          <Link to={"/"}>Home</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to={"/menu"}>Menu</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to={"/order/salad"}>Our Shop</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to={"/secret"}>Secret</Link>
        </a>
      </li>
      <li>
        <Link to={'/'}>
          <button className="btn">
            <FaCartShopping className="" />
            <div className="badge badge-secondary">0</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navitems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignout}
              className="btn btn-outline text-white"
            >
              <Link to={"/login"}>Sign Out</Link>
            </button>
          ) : (
            <button className="btn btn-outline btn-secondary">
              <a>
                <Link to={"/login"}>Log in</Link>
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
