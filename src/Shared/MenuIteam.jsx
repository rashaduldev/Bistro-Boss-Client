

const MenuIteam = ({item}) => {
    const {name,image,category,price}=item;
    return (
        <div>
            <img src={image} alt="" />
            <div>

            </div>
            <p>${price}</p>
        </div>
    );
};

export default MenuIteam;