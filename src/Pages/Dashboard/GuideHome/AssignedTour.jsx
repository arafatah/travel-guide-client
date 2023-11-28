import useAssignedTour from "../../../Hooks/useAssignedTour";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignedTour = () => {
  const [assignedTour] = useAssignedTour();
  console.log(assignedTour);
  const axiosSecure = useAxiosSecure();

  // Function to handle accepting a tour
  const handleAcceptTour = (tourId) => {
    // Logic for accepting the tour
    axiosSecure
      .patch(`/booking/accept/${tourId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(`Accepted tour with ID: ${tourId}`);
  };

  // Function to handle rejecting a tour
  const handleRejectTour = (tourId) => {
    // Logic for rejecting the tour
    axiosSecure

      .patch(`/booking/reject/${tourId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    console.log(`Rejected tour with ID: ${tourId}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Assigned Tours</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border bg-gray-100 p-2">Package Name</th>
            <th className="border bg-gray-100 p-2">Tourist Name</th>
            <th className="border bg-gray-100 p-2">Tour Date</th>
            <th className="border bg-gray-100 p-2">Tour Price</th>
            <th className="border bg-gray-100 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignedTour.map((tour) => (
            <tr key={tour._id}>
              <td className="border p-2">{tour.tripTitle}</td>
              <td className="border p-2">{tour.touristName}</td>
              <td className="border p-2">{tour.tourDate}</td>
              <td className="border p-2">${tour.price}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleAcceptTour(tour._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRejectTour(tour._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTour;
