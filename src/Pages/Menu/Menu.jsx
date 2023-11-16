import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import Popularmenu from '../../Components/Popularmenu';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCatagory from './MenuCatagory';

const Menu = () => {
  const [menu]=useMenu();
  console.log(menu);
  const dessert=menu.filter(item=>item.category==='dessert');
  const soup=menu.filter(item=>item.category==='soup');
  const pizza=menu.filter(item=>item.category==='pizza');
  const offered=menu.filter(item=>item.category==='offered');
  const salad=menu.filter(item=>item.category==='salad');
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="Our Manu"></Cover>
      {/* main cover */}
      <SectionTitle subHeading={'---Dont miss---'} heading={'TODAY S OFFER'}></SectionTitle>
      {/* offered */}
      <MenuCatagory items={offered}></MenuCatagory>
      {/* desserts */}
      <Cover img={menuimg} title="DESSERTS"></Cover>
      <MenuCatagory items={dessert}></MenuCatagory>
        {/* PIZZA */}
      <Cover img={menuimg} title="PIZZA"></Cover>
      <MenuCatagory items={pizza}></MenuCatagory>
        {/* SALADS */}
      <Cover img={menuimg} title="SALADS"></Cover>
      <MenuCatagory items={salad}></MenuCatagory>
        {/* soups */}
      <Cover img={menuimg} title="SOUPS"></Cover>
      <MenuCatagory items={soup}></MenuCatagory>
        </div>
    );
};

export default Menu;