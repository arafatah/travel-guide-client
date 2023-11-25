
const TourGuideTable = ({ guides }) => {
    return (
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Experience</th>
            <th className="py-2 px-4 border-b">Languages</th>
            <th className="py-2 px-4 border-b">Specialties</th>
            <th className="py-2 px-4 border-b">Details</th>
          </tr>
        </thead>
        <tbody>
          {guides.map((guide, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <img
                  src={guide.img}
                  alt={guide.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border-b">{guide.name}</td>
              <td className="py-2 px-4 border-b">{guide.experience}</td>
              <td className="py-2 px-4 border-b">{guide.languages.join(', ')}</td>
              <td className="py-2 px-4 border-b">{guide.specialties.join(', ')}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TourGuideTable;