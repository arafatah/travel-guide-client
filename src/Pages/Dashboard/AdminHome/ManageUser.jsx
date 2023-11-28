import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Function to handle making a user an admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then((res) => {
      if (res.data.modifiedCount === 1) {
        refetch();
        Swal.fire({
          title: "Success",
          text: "User has been made an admin",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      console.log(res);
    });

    console.log(`Making user with ID ${user._id} an admin`);
  };

  const handleMakeTourGuide = (user) => {
    axiosSecure.patch(`/users/guide/${user._id}`).then((res) => {
      if (res.data.modifiedCount === 1) {
        refetch();
        Swal.fire({
          title: "Success",
          text: "User has been made an admin",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      console.log(res);
    });
    console.log(`Making user with ID ${user} a tour guide`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border bg-gray-100 p-2">User Name</th>
            <th className="border bg-gray-100 p-2">User Email</th>
            <th className="border bg-gray-100 p-2">Role</th>
            <th className="border bg-gray-100 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleMakeAdmin(user)}
                  disabled={user.role === "Admin" || user.role === "Tour Guide"}
                  className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 ${
                    user.role === "Admin" && "opacity-50 cursor-not-allowed" ||
                    user.role === "Tour Guide" && "opacity-50 cursor-not-allowed"

                  }`}
                >
                  Make Admin
                </button>
                <button
                  onClick={() => handleMakeTourGuide(user)}
                  disabled={user.role === "Tour Guide" || user.role === "Admin"}
                  className={`bg-green-500 text-white px-4 py-2 rounded ${
                    user.role === "Tour Guide" &&
                    "opacity-50 cursor-not-allowed"||
                    user.role === "Admin" && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Make Tour Guide
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
