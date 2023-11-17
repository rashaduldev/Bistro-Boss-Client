/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuIteam from "../../Shared/MenuIteam";
import Cover from "../../Shared/Cover";


const MenuCatagory = ({items ,title,img}) => {
    console.log(items,title,img);
    return (
        <div>
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item=> <MenuIteam 
                        key={item._id}
                        item={item}
                        ></MenuIteam>)
                }
                 
            </div>
         {
            title &&    <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-10 text-center mx-auto">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
         }
           
        </div>
    );
};


export default MenuCatagory;