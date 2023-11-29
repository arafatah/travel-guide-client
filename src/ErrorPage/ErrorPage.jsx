import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Lottie from "lottie-react";
import Animation from "../../public/Error-Animation.json";

const ErrorPage = () => {
  return (
    <div>
      
      <div className="container mx-auto h-screen flex flex-col justify-center items-center">
        
        <div>
        <Lottie
          animationData={Animation}
          loop={true}
          className="w-full h-auto pl-14"
        />
        </div>
        <Link to="/" className="flex items-center mt-6">
          <FaHome className="text-xl mr-2" />
          Back to Home
        </Link>
        
      </div>
      
    </div>
  );
};

export default ErrorPage;
