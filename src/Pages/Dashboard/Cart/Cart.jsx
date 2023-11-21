import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart]=useCart(); 
    const totatPrice=cart.reduce((total,item)=>total+item.price,0)

  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"---My Cart---"}
      ></SectionTitle>
      <div className="">
        <div className="flex justify-evenly bg-orange-200 py-2 mx-2 rounded">
        <h2 className="uppercase text-3xl">Total Order: {cart.length}</h2>
        <h2 className="uppercase text-3xl">Total Price: {totatPrice}</h2>
        <button className="btn btn-primary">Pay</button>
        </div>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
             {
                cart.map(item=> <tr
                key={item._id}
                >
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={cart.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
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
