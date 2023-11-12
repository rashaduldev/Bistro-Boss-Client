
import Footer from '../Shared/Footer';
import Navber from '../Shared/Navber';
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;