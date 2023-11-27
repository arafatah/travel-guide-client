import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TourGuide from "../TourGuide/TourGuide";
import Container from "../../Components/Shared/Container";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import  { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SinglePackageDetails = () => {
  const singleData = useLoaderData();
  const { img, price, tripTitle, tourType, tourPlan } = singleData;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate()
  const [tourGuide, setTourGuide] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tourGuide")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTourGuide(data);
      });
  }, []);

  // State for form data
  const [formData, setFormData] = useState({
    touristName: user.displayName,
    touristEmail: user.email,
    touristImage: user.photoURL,
    tourDate: new Date(),
    selectedGuide: "",
    price: price,
    tripTitle: tripTitle,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle date picker changes
  const handleDateChange = (date) => {
    setFormData({ ...formData, tourDate: date });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axiosSecure.post("http://localhost:5000/booking", formData)
    .then((res) =>{
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Confirm your Booking',
      });
      navigate("/dashboard/userBookings")

    })
    .catch((err) => console.log(err));
    console.log(formData);
    setModalIsOpen(false);
  };
  return (
    <div>
      <Container>
        {/* Image Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <img
              src={img[0]}
              alt={`Tour Image 1`}
              className="w-full h-96 object-cover rounded-md shadow-md col-span-2 row-span-2"
            />
            {img.slice(1).map((image, index) => (
              <img
                key={index + 1}
                src={image}
                alt={`Tour Image ${index + 2}`}
                className="w-full h-40 object-cover rounded-md shadow-md"
              />
            ))}
            <img
              src={img[1]}
              alt={`Tour Image 2`}
              className="w-full h-96 object-cover rounded-md shadow-md col-span-2 row-span-2"
            />
          </div>
        </div>

        {/* About The Tour Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About The Tour</h2>
          <p className="text-gray-700">{tourType}</p>
          <p className="text-gray-700">{tripTitle}</p>
          <p className="text-gray-700">${price}</p>
        </div>

        {/* Tour Plan Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tour Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tourPlan.map((day, index) => (
              <div key={index} className="p-4 border rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">Day {index + 1}</h3>
                <p className="text-gray-700">{day}</p>
              </div>
            ))}
          </div>
        </div>
        <TourGuide />
        <div className="flex justify-center mt-4 mb-4">
          <button
            onClick={() => setModalIsOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Book This Service
          </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Book Tour Modal"
        >
          <h2 className="text-2xl mb-4">Book This Service</h2>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
            {/* Tourist Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tourist Name:
              </label>
              <input
                type="text"
                name="touristName"
                readOnly
                defaultValue={user.displayName}
                value={formData.touristName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* Tourist Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tourist Email:
              </label>
              <input
                type="email"
                name="touristEmail"
                readOnly
                defaultValue={user.email}
                value={formData.touristEmail}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* Tourist Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tourist Image:
              </label>
              <input
                type="text"
                name="touristImage"
                readOnly
                defaultValue={user.photoURL}
                value={formData.defaultValue}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Package Name:
              </label>
              <input
                type="text"
                name="tripTitle"
                value={tripTitle}
                readOnly
                className="mt-1 p-2 border rounded-md w-full bg-gray-100"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="number"
                name="price"
                value={price}
                readOnly
                className="mt-1 p-2 border rounded-md w-full bg-gray-100"
              />
            </div>

            {/* Tour Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tour Date:
              </label>
              <DatePicker
                selected={formData.tourDate}
                onChange={handleDateChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* Tour Guide Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tour Guide Name:
              </label>
              <select
                name="selectedGuide"
                value={formData.selectedGuide}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
              >
                {tourGuide.map((guide) => (
                  <option key={guide.id} value={guide.name}>
                    {guide.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Book Now
            </button>
          </form>
        </Modal>
      </Container>
    </div>
  );
};

export default SinglePackageDetails;
