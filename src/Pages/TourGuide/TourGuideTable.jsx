import { Link } from "react-router-dom";

const TourGuideTable = ({ guides }) => {
  return (
   <div className="overflow-x-auto">
  <table className="table overflow-x-auto">
    {/* head */}
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
          <td>
            <div className="flex items-center gap-10">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={guide.img} alt={`Avatar ${guide.name}`} />
                </div>
              </div>
              <div>
                <div className="text-sm opacity-50">{guide?.location}</div>
              </div>
            </div>
          </td>
          <td>{guide.name}</td>
          <td>{guide.experience}</td>
          <td>{guide.languages.join(", ")}</td>
          <td>{guide.specialties.join(", ")}</td>
          <td>
            <Link to={`/tourGuide/${guide._id}`}>
              <button className="btn btn-ghost btn-xs">Details</button>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default TourGuideTable;



