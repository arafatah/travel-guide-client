import { Helmet } from "react-helmet-async";
import Tabs from "../Tabs/Tabs";
import TourTypes from "../TourTypes/TourTypes";
import Banner from "./Banner/Banner";
import StorySection from "./StorySection/StorySection";

const Home = () => {
  return (
    <div>
      <div className="mt-10">
        <Helmet>
          <title>Home | TRAVOL</title>
        </Helmet>
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
