import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTourGuide from "../../../Hooks/useTourGuide";

const GuideHome = () => {
  const [tourGuide] = useTourGuide();
  console.log(tourGuide);
 const {user} = useAuth();
 const axiosSecure = useAxiosSecure()

  // Function to handle form submission for adding a guide's profile
  const handleAddGuideProfile = (e) => {
    e.preventDefault();
    // Logic for adding a guide's profile
    const form = e.target;
    const name = user.displayName;
    const img = user.photoURL;
    const experience = form.experience.value;
    const languages = form.languages.value.split(",");
    const specialties = form.specialties.value.split(",");
    const description = form.description.value;
    const contactEmail = form.contactEmail.value;
    const contactPhone = form.contactPhone.value;

    const newInfo = {
        name,
        img,
        experience,
        languages,
        specialties,
        description,

        contact: {
            email: contactEmail,
            phone: contactPhone,
        },
    };
    console.log(newInfo);
    axiosSecure.post("/tourGuide", newInfo)
    .then((res) => {
        Swal.fire({
            icon: "success",
            title: "Guide Profile Added",
            text: "Your profile has been added successfully",
        });
        console.log(res);
    })
    .catch((err) => console.log(err));



    // Clear the form
    form.reset();


    console.log("Form submitted for adding guide profile");
  };

  return (
    <div className="flex my-8">
  {/* Tour Guide Info */}
  <div className="flex-1 mr-8">
    {tourGuide && (
      <div>
        <img
          src={tourGuide.img}
          alt={tourGuide.name}
          className="w-64 h-64 object-cover rounded-full"
        />
        <h2 className="text-2xl font-bold mt-4">{tourGuide.name}</h2>
        <p className="text-lg">{tourGuide.experience}</p>
        <p className="text-lg">{tourGuide.description}</p>
      </div>
    )}
  </div>

  {/* Add Guide's Profile Form */}
  <div className="flex-1">
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Guide's Profile</h2>
      <form onSubmit={handleAddGuideProfile} className="grid grid-cols-1 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={user.displayName}
            readOnly
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            name="img"
            defaultValue={user.photoURL}
            readOnly
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Experience:</label>
          <input
            type="text"
            name="experience"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Languages (comma-separated):</label>
          <input
            type="text"
            name="languages"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Specialties */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Specialties (comma-separated):</label>
          <input
            type="text"
            name="specialties"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            rows="4"
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email:</label>
          <input
            type="email"
            name="contactEmail"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Phone:</label>
          <input
            type="text"
            name="contactPhone"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add Profile
        </button>
      </form>
    </div>
  </div>
</div>


  
  );
};

export default GuideHome;
