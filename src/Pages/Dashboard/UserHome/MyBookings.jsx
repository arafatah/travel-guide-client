import useBookings from "../../../Hooks/useBookings";

const MyBookings = () => {
  const [bookings] = useBookings();
  console.log(bookings);

  // Function to handle applying for discount
  const handleApplyDiscount = () => {
    // Logic for applying discount
    console.log("Congratulations! You've got a discount.");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Package Name</th>
              <th className="p-2">Tour Guide Name</th>
              <th className="p-2">Tour Date</th>
              <th className="p-2">Tour Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="border p-2">{booking.tripTitle}</td>
                <td className="border p-2">{booking.selectedGuide}</td>
                <td className="border p-2">{booking.tourDate}</td>
                <td className="border p-2">${booking.price}</td>
                <td className="border p-2">
                  <span
                    className={`${
                      booking.status === "Approved"
                        ? "text-green-500"
                        : booking.status === "Rejected"
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  >
                    {booking.status }
                  </span>
                </td>
                <td className="border p-2">
                  {booking.status === "pending" && (
                    <>
                      <button
                        className="text-sm text-red-500 btn-sm mr-2"
                        onClick={() => console.log('Cancel')}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-sm text-blue-500 btn btn-sm"
                        onClick={() => console.log('Apply')}
                        disabled={bookings.length <= 3}
                      >
                        Apply
                      </button>
                    </>
                  )}
                  {booking.status === 'Approved' && (
                    <button
                      className="text-sm text-green-500 btn btn-sm px-4"
                      onClick={() => console.log('Pay')}
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {bookings.length > 3 && (
        <div className="mt-4">
          <p className="text-green-500">Congratulations! You've got a discount.</p>
          <button
            className="text-sm text-green-500 btn btn-sm px-4"
            onClick={handleApplyDiscount}
            disabled={true}
          >
            Apply Discount
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
