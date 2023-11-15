import Popularmenu from "../../Components/Popularmenu";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Catagory></Catagory>
        <Popularmenu></Popularmenu>
        <Featured></Featured>
        </div>
    );
};

export default Home;