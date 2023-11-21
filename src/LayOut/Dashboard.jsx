import { FaArtstation, FaCalendar, FaCartShopping, FaHouseMedical, FaMarsAndVenus, FaMoneyBill, FaSearchengin } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
                <ul className="menu">
                        <li className="mb-2">
                            <NavLink to={'/dashboard/userHome'}>
                            <FaHouseMedical></FaHouseMedical>
                            User Home</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/dashboard/cart'}>
                            <FaCartShopping></FaCartShopping>
                            My cart</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/dashboard/reservation'}>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/dashboard/payment'}>
                            <FaMoneyBill></FaMoneyBill>
                            Payment History</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/dashboard/review'}>
                            <FaArtstation></FaArtstation>
                            Add Review</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/dashboard/booking'}>
                           <FaMarsAndVenus></FaMarsAndVenus>
                            My Booking</NavLink>
                        </li>
                        <div className="divider"></div>
                        <li className="mb-2">
                            <NavLink to={'/'}>
                            <FaHouseMedical></FaHouseMedical>
                            Home</NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink to={'/order/salad'}>
                            <FaSearchengin></FaSearchengin>
                            Menu</NavLink>
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