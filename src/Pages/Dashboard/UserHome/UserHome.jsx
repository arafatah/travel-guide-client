import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UserHome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
 const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0); // Default rating value
  const [review, setReview] = useState("");
  const [date, setDate] = useState(new Date().toISOString()); // Default to current date
  const [tourType, setTourType] = useState("");

  const onSubmit = (data) => {
    // Handle the submission of the story data (e.g., send it to the backend)
    // After handling the submission, you can reset the form

    // Send the data to the backend
    data = {
      ...data,
      rating,
      review,
      date,
      tourType,
      email: user.email,
      username: user.displayName,
      photoURL: user.photoURL,
    };
    axiosSecure.post("/review", data);


    console.log(data);
    // Reset the form and state
    reset();
    setRating(0);
    setReview("");
    setDate(new Date().toISOString());
    setTourType("");
    navigate("/dashboard/userHome");
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        {user && user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-10 h-10 rounded-full mr-2"
          />
        )}
        <h2 className="text-2xl">
          Welcome Back, {user.displayName ? user.displayName : "Home"}
        </h2>
      </div>

      {/* Form for adding a story */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            {...register("rating", { required: "Rating is required" })}
            type="number"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tell us your story
          </label>
          <textarea
            {...register("review", { required: "Review is required" })}
            placeholder="Share your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full h-32 p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            {...register("date", { required: "Date is required" })}
            type="date"
            value={date.slice(0, 10)}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tour Type
          </label>
          <input
            {...register("tourType", { required: "Tour Type is required" })}
            type="text"
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          Add Story
        </button>
      </form>
    </div>
  );
};

export default UserHome;
