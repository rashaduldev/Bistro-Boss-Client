import { useState } from "react";
import Cover from "../../Shared/Cover";
import orderimg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import Ordertab from "./Ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Orderfood = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams();
    console.log(category);
    const initialindex=categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialindex);
    const [menu]=useMenu();
    console.log(menu);
    const dessert=menu.filter(item=>item.category==='dessert');
    const soup=menu.filter(item=>item.category==='soup');
    const pizza=menu.filter(item=>item.category==='pizza');
    const drinks=menu.filter(item=>item.category==='drinks');
    const salad=menu.filter(item=>item.category==='salad');
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
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
  <Ordertab items={salad}></Ordertab>
  </TabPanel>
  {/* pizza */}
  <TabPanel>
  <Ordertab items={pizza}></Ordertab>
  </TabPanel>
  {/* shup */}
  <TabPanel>
  <Ordertab items={soup}></Ordertab>
  </TabPanel>
  {/* dessert */}
  <TabPanel>
  <Ordertab items={dessert}></Ordertab>
  </TabPanel>
  {/* drinks */}
  <TabPanel>
  <Ordertab items={drinks}></Ordertab>
  </TabPanel>
  {/* <TabPanel></TabPanel> */}
</Tabs>
             </div>
        </div>
    );
};

export default Orderfood;