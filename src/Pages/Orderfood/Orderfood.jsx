import { useState } from "react";
import Cover from "../../Shared/Cover";
import orderimg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";

const Orderfood = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [menu]=useMenu();
    console.log(menu);
    const dessert=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const pizza=menu.filter(item=>item.category==='pizza');
    const drinks=menu.filter(item=>item.category==='drinks');
    const salad=menu.filter(item=>item.category==='salad');
    return (
        <div>
             <Cover img={orderimg} title="OUR SHOP"></Cover>
             <div className="text-center mx-auto">
             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList >
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        salad.map(items=><FoodCard
             key={items._id}
             items={items}
             ></FoodCard>)
    }
   </div>
  </TabPanel>
  {/* pizza */}
  <TabPanel>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        pizza.map(items=><FoodCard
             key={items._id}
             items={items}
             ></FoodCard>)
    }
   </div>
  </TabPanel>
  {/* shup */}
  <TabPanel>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        soup.map(items=><FoodCard
             key={items._id}
             items={items}
             ></FoodCard>)
    }
   </div>
  </TabPanel>
  {/* dessert */}
  <TabPanel>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        dessert.map(items=><FoodCard
             key={items._id}
             items={items}
             ></FoodCard>)
    }
   </div>
  </TabPanel>
  {/* drinks */}
  <TabPanel>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {
        drinks.map(items=><FoodCard
             key={items._id}
             items={items}
             ></FoodCard>)
    }
   </div>
  </TabPanel>
  {/* <TabPanel></TabPanel> */}
</Tabs>
             </div>
        </div>
    );
};

export default Orderfood;