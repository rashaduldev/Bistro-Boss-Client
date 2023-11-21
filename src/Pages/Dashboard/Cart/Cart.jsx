import { FaNutritionix, FaTrash} from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart,refetch]=useCart(); 
    const totatPrice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure();

    const handleDeleteCart=(id)=>{
        console.log(id);
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                console.log(res);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                })
                refetch();
            })
            }
          });
       
    }

  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"---My Cart---"}
      ></SectionTitle>
      <div className="">
        <div className="flex gap-3 justify-evenly bg-orange-200 py-2 mx-2 rounded mb-6">
        <h2 className="uppercase lg:text-3xl text-center">Total Order: {cart.length}</h2>
        <h2 className="uppercase lg:text-3xl text-center">Total Price: {totatPrice}</h2>
        <button className="btn btn-primary">Pay</button>
        </div>
       
        <div className="overflow-x-auto ml-9">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                 <FaNutritionix></FaNutritionix>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
             {
                cart.map((item,index)=> <tr
                key={item._id}
                >
                    <th>
                   {index +1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <button 
                      onClick={()=>handleDeleteCart(item._id)}
                      className="btn btn-ghost btn-xs text-lg">
                       <FaTrash></FaTrash>
                      </button>
                    </th>
                  </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
