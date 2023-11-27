import { useLoaderData } from "react-router-dom";

const TourGuideProfile = () => {
  const tourGuideData = useLoaderData();
  const {
    img,
    name,
    experience,
    languages,
    specialties,
    description,
    contact,
  } = tourGuideData;

  return (
    <div className="bg-white p-8 shadow-md rounded-lg mx-auto max-w-md">
      <div className="flex flex-col items-center justify-center">
        
        <img
          src={img}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">
          <p className="text-lg font-semibold mb-2">
            {experience} Years of Experience
          </p>
          <p className="text-lg font-semibold mb-2">
            Languages: {languages.join(", ")}
          </p>
          <p className="text-lg font-semibold mb-2">
            Specialties: {specialties.join(", ")}
          </p>
          <p className="text-lg font-semibold mb-2">Email: {contact.email}</p>
          <p className="text-lg font-semibold">Phone: {contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
