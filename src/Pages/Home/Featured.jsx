import SectionTitle from "../../Components/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg"
import './featured.css'



const Featured = () => {
    return (
        <div className="featured_item">
            <SectionTitle subHeading={"Check it out"} heading={"Featured item"}></SectionTitle>
              <div className="md:flex justify-center items-center py-8 px-16">
              <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
              </div>
        </div>
    );
};

export default Featured;