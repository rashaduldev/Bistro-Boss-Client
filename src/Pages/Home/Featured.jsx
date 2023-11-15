import SectionTitle from "../../Components/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg"
import './featured.css'



const Featured = () => {
    return (
        <div className="featured_item text-white pt-8 my-20 bg-fixed">
            <div className="text-black">
            <SectionTitle subHeading={"Check it out"} heading={"Featured item"}></SectionTitle>
            </div>
              <div className="md:flex justify-center items-center md:pt-12 md:pb-20 md:px-36 px-10 bg-slate-400 bg-opacity-50">
              <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2  ">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-10">Order Now</button>
                </div>
              </div>
        </div>
    );
};

export default Featured;