import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from './../Hooks/useAxiosSecure';

/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {
      const {name,image,recipe,price,_id}=item;
  const {user}=useAuth();
  console.log(user);
  const navigate=useNavigate();
  const location=useLocation();
  const axiosSecure=useAxiosSecure();

  const handleAddtoCart=(food)=>{
    console.log(food);
    if (user && user.email) {
      console.log("good");
      const cartItem={
        menuId:_id,
        email: user.email,
        name,
        image,
        recipe,
        price
      }
      console.log(cartItem);
      axiosSecure.post('http://localhost:3000/carts',cartItem)
      .then(res=>{
        console.log(res.data);
        Swal.fire({
          icon:'success',
          title: `${name} Added to cart`,
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    else{
      Swal.fire({
        title: "You are not Login!",
        text: "Please Login First then try again.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Here..."
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}});
        }
      });
    }
  }

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
          <button onClick={()=>handleAddtoCart(item)} className="btn btn-outline border-0 border-b-4 mt-10 text-center mx-auto">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
