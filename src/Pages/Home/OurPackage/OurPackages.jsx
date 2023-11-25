import { useEffect, useState } from "react";
import OurPackage from "./OurPackage";
import { Link } from "react-router-dom";

const OurPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const visiblePackages = packages.slice(0, 3);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {visiblePackages.map((pack) => (
          <OurPackage key={pack._id} pack={pack}></OurPackage>
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
