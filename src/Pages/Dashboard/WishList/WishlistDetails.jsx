import { useLoaderData } from "react-router-dom";

const WishlistDetails = () => {
  const wishlistDetails = useLoaderData();
  console.log(wishlistDetails);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Wishlist Details</h2>
      {wishlistDetails ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-4">
            <img
              src={wishlistDetails.img[0]}
              alt={wishlistDetails.title}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="col-span-2">
            <p className="text-gray-600 text-sm mb-2">Package ID: {wishlistDetails._id}</p>
            <h3 className="text-xl font-bold mb-2">{wishlistDetails.title}</h3>
            <p className="text-lg font-semibold mb-2">${wishlistDetails.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-4">{wishlistDetails.description}</p>
            <p className="text-gray-600 mb-2">
              Type: {wishlistDetails.type}
            </p>
            <p className="text-gray-600 mb-2">
              Email: {wishlistDetails.email}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading wishlist details...</p>
      )}
    </div>
  );
};

export default WishlistDetails;
