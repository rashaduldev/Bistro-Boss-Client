/* eslint-disable react/prop-types */
import FoodCard from "../../Components/FoodCard";


const Ordertab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        items.map(item=><FoodCard
             key={item._id}
             item={item}
             ></FoodCard>)
    }
   </div>
    );
};

export default Ordertab;