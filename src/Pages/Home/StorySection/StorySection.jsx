import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const StorySection = () => {
  const [story, setStory] = useState([]);
  console.log(story);
  useEffect(() => {
    fetch("https://tour-guide-server-omega.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="story-container mx-auto p-4 md:p-10">
      <div className="mb-8">
        <h2
          data-aos="fade-left"
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          Tourist Stories
          <hr className="w-16 md:w-60 mx-auto" />
        </h2>
        <p className="text-base md:text-lg text-center text-gray-900 dark:text-white">
          Read what our amazing tourists say about their experiences.
        </p>
      </div>
      <Swiper
        data-aos="fade-right"
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {story.map((storyItem) => (
          <SwiperSlide key={storyItem._id}>
            <Link to={`/allStory/${storyItem._id}`}>
              <div className="story-slide bg-white shadow-md p-4 md:p-8 px-4 md:px-20 rounded-md">
                <div className="story-content text-left">
                  <h3 className="story-title text-lg md:text-xl font-bold mb-2 md:mb-4">
                    {storyItem.username}'s Journey
                  </h3>
                  <p className="story-text text-gray-700 text-sm md:text-base">
                    {storyItem.review}
                  </p>
                  <p className="story-author text-xs md:text-sm text-gray-500 mt-2 md:mt-4">
                    - {storyItem.username}, {storyItem.date}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 md:mt-8 text-center">
        <Link to="/allStory">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full">
            Read More Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StorySection;
