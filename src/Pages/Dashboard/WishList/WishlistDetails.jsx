import { useLoaderData } from "react-router-dom";

const WishlistDetails = () => {
  const wishlistDetails = useLoaderData();
  console.log(wishlistDetails);
//   const [wishlistDetails, setWishlistDetails] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Wishlist Details</h2>
      {wishlistDetails ? (
        <div>
          <p>Email: {wishlistDetails.email}</p>
          <p>Package ID: {wishlistDetails._id}</p>
          {/* Add more details based on your wishlist schema */}
        </div>
      ) : (
        <p>Loading wishlist details...</p>
      )}
    </div>
  );
};

export default WishlistDetails;
