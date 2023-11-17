const FoodCard = ({items}) => {
    const {name,image,recipe,price}=items;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="bg-slate-600 bg-opacity-50 rounded-sm font-bold px-2 text-white absolute right-4 top-4">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-10 text-center mx-auto">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
