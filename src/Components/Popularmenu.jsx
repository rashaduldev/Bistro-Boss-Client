import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuIteam from "../Shared/MenuIteam";


const Popularmenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json)
        .then(data=>{
            const popularItems=data.filter(item=>item.category==='popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={"From our menu"}
            subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div>
                {
                    menu.map(item=> <MenuIteam 
                        key={item._id}
                        item={item}
                        ></MenuIteam>)
                }
            </div>
        </section>
    );
};

export default Popularmenu;