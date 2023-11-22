import {
  FaArtstation,
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaHouseMedical,
  FaList,
  FaMarsAndVenus,
  FaMoneyBill,
  FaSearchengin,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="mb-2">
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHouseMedical></FaHouseMedical>
                  Admin Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/additems"}>
                  <FaUtensils></FaUtensils>
                 Add Items
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/reservation"}>
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/booking"}>
                  <FaBook></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/users"}>
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-2">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHouseMedical></FaHouseMedical>
                  User Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/cart"}>
                  <FaCartShopping></FaCartShopping>
                  My cart ({cart.length})
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/payment"}>
                  <FaMoneyBill></FaMoneyBill>
                  Payment History
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/review"}>
                  <FaArtstation></FaArtstation>
                  Add Review
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/booking"}>
                  <FaMarsAndVenus></FaMarsAndVenus>
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          {/* Shared navlinks */}
          <li className="mb-2">
            <NavLink to={"/"}>
              <FaHouseMedical></FaHouseMedical>
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to={"/order/salad"}>
              <FaSearchengin></FaSearchengin>
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
