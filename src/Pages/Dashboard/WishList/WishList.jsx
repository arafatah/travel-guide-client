import { Link } from "react-router-dom";
import useWishList from "../../../Hooks/useWishList";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const WishList = () => {
  const [wishlist, refetch] = useWishList();
  console.log(wishlist);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/wishlist/${id}`)
    .then((res) => {
      if (res.data.deletedCount) {
        Swal.fire({
          icon: "success",
          title: "Deleted from wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <div>
      {wishlist.length === 0 ? (
        <h2 className="text-center text-3xl font-bold mt-8">
          No wishlist found
        </h2>
      ) : (
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Wishlist</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">{item.type}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full mr-2 hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <Link
                      to={`packageDetails/${item._id}`}
                      className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                    >
                      Visit Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishList;
