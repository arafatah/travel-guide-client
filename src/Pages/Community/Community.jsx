import { Helmet } from "react-helmet-async";

const Community = () => {
  return (
    <div className="container mx-auto py-8">
        <Helmet>
        <title>Community | TRAVOL</title>
        </Helmet>
      <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
      <p className="text-gray-600 mb-6">
        Explore the beauty of Bangladesh and beyond with our expert tour guides. Join our diverse community of travel enthusiasts for a memorable and immersive experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <img
            src="https://i.ibb.co/kmQHssT/pexels-cottonbro-studio-4979492.jpg"
            alt="Community Member"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">John Doe</h3>
          <p className="text-gray-500 mb-2">Passionate traveler from Dhaka, Bangladesh</p>
          <p className="text-gray-500">Specialties: Historical Sites, Cultural Experience</p>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <img
            src="https://i.ibb.co/BNM7m2b/pexels-te-lensfix-1371360.jpg"
            alt="Community Member"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">Jane Doe</h3>
          <p className="text-gray-500 mb-2">Adventure seeker exploring the hills of Sylhet</p>
          <p className="text-gray-500">Specialties: Adventure, Wildlife Safari</p>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <img
            src="https://i.ibb.co/H4q4RdL/pexels-oliver-sj-str-m-1122462.jpg"
            alt="Community Member"
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">Alex Smith</h3>
          <p className="text-gray-500 mb-2">Cultural explorer fascinated by historical sites</p>
          <p className="text-gray-500">Specialties: Cultural Experience, Food Tours</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
