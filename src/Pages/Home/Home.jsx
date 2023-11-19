import { Helmet } from "react-helmet";
import Popularmenu from "../../Components/Popularmenu";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
// import FoodPagination from "../../Components/FoodPagination";


const Home = () => {
    return (
        <div>
               <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
        <Banner></Banner>
        <Catagory></Catagory>
        <Popularmenu></Popularmenu>
        <Featured></Featured>
        {/* <FoodPagination></FoodPagination> */}
        <Testimonials></Testimonials>
    
        </div>
    );
};

export default Home;