import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [refetch]=useCart(); 
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });
  const handleMakeAdmin=(user)=>{
    axiosSecure.patch(`/users/admin/${user._id}`,)
    .then(res=>{
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            
        }
    })
  }
  const handleDeleteUser=(user)=>{
    console.log('User deleted successfully',user.email);
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
        axiosSecure.delete(`/users/${user._id}`)
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
      <div className="flex justify-evenly my-4">
      <div className="text-3xl">All Users</div>
      <div className="text-3xl">Totat Users ({users.length})
      
      </div>
      
    </div>
    <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index) => (
                    <tr key={user._id}>
                    <th>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <button 
                      onClick={()=>handleMakeAdmin(user)}
                      className="btn btn-ghost btn-xs bg-orange-500 text-2xl">
                       <FaUsers></FaUsers>
                      </button>
                    </td>
                    <td className="text-2xl">
                    <button 
                      onClick={()=>handleDeleteUser(user)}
                      className="btn btn-ghost btn-xs text-lg">
                       <FaTrash></FaTrash>
                      </button>
                    </td>
                  </tr>
                ))
  
            }
           
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default AllUsers;
