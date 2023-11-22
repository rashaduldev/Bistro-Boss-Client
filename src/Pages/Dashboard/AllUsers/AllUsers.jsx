import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDeleteLeft } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });
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
                    <td>Blue</td>
                    <td className="text-2xl"><FaDeleteLeft></FaDeleteLeft></td>
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
