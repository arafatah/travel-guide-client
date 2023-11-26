import Tabs from "../Tabs/Tabs";
import TourTypes from "../TourTypes/TourTypes";
import Banner from "./Banner/Banner";
import StorySection from "./StorySection/StorySection";

const Home = () => {
  return (
    <div>
      <div className="mt-10">
        <Banner></Banner>
      </div>
      <Tabs />
      <div>
        <TourTypes />
      </div>
      <div>
        <StorySection />
      </div>
    </div>
  );
};

export default Home;
