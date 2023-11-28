import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaLandmark, FaTree } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSailboat } from "react-icons/fa6";
import { GiCultist, GiTigerHead } from "react-icons/gi";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const TourTypes = () => {
  const tourTypeData = [
    { icon: <FaLandmark size={32} />, label: 'Walking Tour' },
    { icon: <FaTree size={32} />, label: 'Adventure' },
    { icon: <FaLandmark size={32} />, label: 'Historical Sites' },
    { icon: <FaSailboat size={32} />, label: 'Cruise' },
    { icon: <GiTigerHead  size={32} />, label: 'Wildlife Safari' },
    { icon: <GiCultist size={32} />, label: 'Cultural Experience' },
  ];
  useEffect(()=>{
    Aos.init({duration:2000})

},[])
  return (
    <div 
    className="container mx-auto my-16">
      <div>
        <h3 data-aos = "fade-left" className="mb-11 text-center font-medium">
          Tour types Of Our Website <hr className="w-44 mt-3 mx-auto" />
        </h3>
      </div>
      <Swiper
      data-aos = "fade-right"
        slidesPerView={5}
        spaceBetween={20}
        className="mySwiper md:grid lg:grid-cols-3 xl:grid-cols-5"
      >
        {tourTypeData.map((tourType, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/tour-type/${tourType.label.toLowerCase()}`}
              className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 cursor-pointer text-center"
            >
              {tourType.icon}
              <span className="text-lg font-semibold mt-2">{tourType.label}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TourTypes;
