const OurPackage = ({ pack }) => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        {/* Tour Photo */}
        <img
          className="w-full h-48 object-cover object-center"
          src={pack.img}
          alt="Tour Spot"
        />

        <div className="p-4">
          {/* Heart Icon for Wishlist */}
          <div className="flex justify-end">
            <button className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l-1.45-1.316C5.4 12.35 2 9.583 2 6.5 2 3.42 4.42 1 7.5 1c1.74 0 3.41.81 4.5 2.09C13.09 1.81 14.76 1 16.5 1 19.58 1 22 3.42 22 6.5c0 3.083-3.4 5.85-8.55 11.184L12 19z"
                />
              </svg>
            </button>
          </div>

          {/* Tour Type */}
          <div className="text-gray-500 text-sm uppercase font-bold mb-2">
            {pack.tourType}
          </div>

          {/* Trip Title */}
          <div className="text-2xl font-bold text-gray-800 mb-2">
            {pack.tripTitle}
          </div>

          {/* Price */}
          <div className="text-green-500 text-xl font-semibold mb-4">
            ${pack.price}
          </div>

          {/* View Package Button */}
          <button className="bg-indigo-500 text-white rounded-full px-6 py-2 hover:bg-indigo-600 transition duration-300">
            View Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPackage;
