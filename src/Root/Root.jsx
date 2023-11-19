
import Footer from '../Shared/Footer';
import Navber from '../Shared/Navber';
import { Outlet, useLocation } from 'react-router-dom';


const Root = () => {
    const location=useLocation();
    console.log(location);
    const noHeadernoFooter=location.pathname.includes('login');
    console.log(noHeadernoFooter);
    return (
        <div>
            {noHeadernoFooter || <Navber></Navber>}
           <Outlet></Outlet>
            {noHeadernoFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Root;