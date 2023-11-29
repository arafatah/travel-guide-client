import { useEffect, useState } from "react";
import TourGuideTable from "./TourGuideTable";

const TourGuide = () => {
  const [tourGuide, setTourGuide] = useState([]);

  useEffect(() => {
    fetch("https://tour-guide-server-omega.vercel.app/tourGuide")
      .then((res) => res.json())
      .then((data) => setTourGuide(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Tour Guides</h2>
      <TourGuideTable guides={tourGuide} />
    </div>
  );
};

export default TourGuide;
