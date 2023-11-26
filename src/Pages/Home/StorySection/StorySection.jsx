// StorySection.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StorySection = () => {
  const [story, setStory] = useState([]);
  console.log(story);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setStory(data);
      });
  }, []);

  return (
    <div className="story-container mx-auto p-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Tourist Stories
        </h2>
        <p className="text-lg text-center text-gray-600">
          Read what our amazing tourists say about their experiences.
        </p>
      </div>
      <Swiper
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
              <div className="story-slide bg-white shadow-md p-8 rounded-md">
                <div className="story-content text-left">
                  <h3 className="story-title text-xl font-bold mb-4">
                    {storyItem.username}'s Journey
                  </h3>
                  <p className="story-text text-gray-700">{storyItem.review}</p>
                  <p className="story-author text-sm text-gray-500 mt-4">
                    - {storyItem.username}, {storyItem.date}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 text-center">
        <Link to="/allStory">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Read More Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StorySection;
