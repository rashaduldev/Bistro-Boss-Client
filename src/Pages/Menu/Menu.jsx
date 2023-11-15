import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import Popularmenu from '../../Components/Popularmenu';

const Menu = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} title="Our Manu"></Cover>
      <Popularmenu></Popularmenu>
      <Cover img={menuimg} title="Our Manu"></Cover>
      <Popularmenu></Popularmenu>
      <Cover img={menuimg} title="Our Manu"></Cover>
      <Popularmenu></Popularmenu>
        </div>
    );
};

export default Menu;