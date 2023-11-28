import { useState } from 'react';
import { imageUpload } from '../../../api/utils';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    img: [],
    tourType: '',
    tripTitle: '',
    price: '',
    tourPlan: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Initial tour plan array
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const imageArray = [];
  
    for (const file of files) {
      try {
        const imageData = await imageUpload(file);
        console.log(imageData.data.display_url);
        imageArray.push(imageData.data.display_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      img: [...prevFormData.img, ...imageArray],
    }));
  };



  const handleAddDay = () => {
    setFormData({ ...formData, tourPlan: [...formData.tourPlan, `Day ${formData.tourPlan.length + 1}`] });
  };

  const handleTourPlanChange = (index, value) => {
    const updatedTourPlan = [...formData.tourPlan];
    updatedTourPlan[index] = value;
    setFormData({ ...formData, tourPlan: updatedTourPlan });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic with formData

    axiosSecure.post('/packages', formData)
      .then((res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Added',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
      <Helmet>
        <title>Add Package | TRAVOL</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6">Add Package</h2>
      <form onSubmit={handleFormSubmit} className="grid grid-cols-2 gap-4">
        {/* Image */}
        <div className="col-span-2">
          <label htmlFor="image" className="block mb-2 text-sm">
            Select At Least 5 Image:
          </label>
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {/* Tour Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tour Type:</label>
          <input
            type="text"
            name="tourType"
            value={formData.tourType}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Trip Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Trip Title:</label>
          <input
            type="text"
            name="tripTitle"
            value={formData.tripTitle}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

         {/* Tour Plan */}
         <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Tour Plan:</label>
          {formData.tourPlan.map((day, index) => (
            <div key={index} className="flex items-center">
              <textarea
                value={day}
                onChange={(e) => handleTourPlanChange(index, e.target.value)}
                className="mt-1 p-2 border rounded-md w-full mr-2"
              />
              {index === formData.tourPlan.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddDay}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                >
                  Add Day
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPackage;
