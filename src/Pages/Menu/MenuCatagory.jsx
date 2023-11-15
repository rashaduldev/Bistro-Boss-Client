/* eslint-disable react/prop-types */
import MenuIteam from "../../Shared/MenuIteam";


const MenuCatagory = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item=> <MenuIteam 
                        key={item._id}
                        item={item}
                        ></MenuIteam>)
                }
                 
            </div>
        </div>
    );
};


export default MenuCatagory;