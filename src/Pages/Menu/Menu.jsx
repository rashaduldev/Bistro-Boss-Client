import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCatagory from "./MenuCatagory";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="Our Manu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"---Dont miss---"}
        heading={"TODAY S OFFER"}
      ></SectionTitle>
      {/* offered */}
      <MenuCatagory items={offered}></MenuCatagory>
      {/* desserts */}
      <MenuCatagory
        items={dessert}
        title="dessert"
        img={dessertimg}
      ></MenuCatagory>
      {/* PIZZA */}
      <MenuCatagory items={pizza} title="pizza" img={pizzaimg}></MenuCatagory>
      {/* SALADS */}
      <MenuCatagory items={salad} img={saladimg} title="salad"></MenuCatagory>
      {/* soups */}
      <MenuCatagory items={soup} img={soupimg} title="soup"></MenuCatagory>
    </div>
  );
};

export default Menu;
