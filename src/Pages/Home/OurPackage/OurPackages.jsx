import { Link } from "react-router-dom";
import OurPackage from "./OurPackage";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OurPackages = () => {
  const [packages, setPackages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleAddToWishlist = (id) => {
    const selectedPackage = packages.find((pack) => pack._id === id);

    if (user && selectedPackage) {
      const wishlistItem = {
        email: user.email,
        img: selectedPackage.img,
        type: selectedPackage.tourType,
        title: selectedPackage.tripTitle,
        price: selectedPackage.price,
      };
      axiosSecure
        .post("/addToWishlist", wishlistItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: `${wishlistItem.title} Added to wishlist`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));

      console.log(wishlistItem);
    } else {
      console.log("User not logged in or package not found");
    }
  };

  const visiblePackages = packages.slice(0, 3);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {visiblePackages.map((pack) => (
          <OurPackage
            key={pack._id}
            pack={pack}
            handleAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/allPackages">
          <button className="bg-indigo-500 text-white rounded-full px-6 py-2 hover:bg-indigo-600 transition duration-300">
            All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPackages;
