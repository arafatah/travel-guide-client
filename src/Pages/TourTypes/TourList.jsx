import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TourList = () => {
  const { tourType } = useParams();
  const [packages, setPackages] = useState([]);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setTourData(data));
  }, []);

  useEffect(() => {
    const filteredPackages = tourData.filter(
      (tour) => tour.tourType.toLowerCase() === tourType.toLowerCase()
    );
    setPackages(filteredPackages);
  }, [tourType, tourData]);

  return (
    <div className="container mx-auto my-10">
      <h3 className="mb-11 text-center font-medium">
        {tourType} Packages <hr className="w-44 mt-3 mx-auto" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((tour, index) => (
          <div key={index} className="package-card">
            <img src={tour.img} alt={tour.tripTitle} className="mb-2 rounded-lg" />
            <p className="text-lg font-semibold">{tour.tripTitle}</p>
            <p className="text-base">${tour.price}</p>
            <Link to={`/package/${tour._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">
              View Package
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
