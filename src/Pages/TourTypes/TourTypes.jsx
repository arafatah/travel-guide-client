import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaLandmark, FaTree } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TourTypes = () => {
  const tourTypeData = [
    { icon: <FaLandmark size={32} />, label: 'Historical Sites' },
    { icon: <FaTree size={32} />, label: 'Wildlife Safari' },
    { icon: <FaLandmark size={32} />, label: 'Historical Sites' },
    { icon: <FaTree size={32} />, label: 'Cultural Experience' },
    { icon: <FaTree size={32} />, label: 'Historical Sites' },
    { icon: <FaTree size={32} />, label: 'Wildlife Safari' },
    { icon: <FaTree size={32} />, label: 'Cultural Experience' },
    { icon: <FaTree size={32} />, label: 'Cruise' },
  ];

  return (
    <div className="container mx-auto my-10">
      <div>
        <h3 className="mb-11 text-center font-medium">
          Tour types Of Our Website <hr className="w-44 mt-3 mx-auto" />
        </h3>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
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
