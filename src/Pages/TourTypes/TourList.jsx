import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TourList = () => {
  const { tourType } = useParams();
  const [packages, setPackages] = useState([]);
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    fetch("/Package.json")
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
      {packages.map((tour, index) => (
        <div key={index} className="package-card">
          <img src={tour.img} alt={tour.tripTitle} className="mb-2 rounded-lg" />
          <p className="text-lg font-semibold">{tour.tripTitle}</p>
          <p className="text-base">${tour.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TourList;
