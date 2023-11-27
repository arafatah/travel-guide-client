import useBookings from "../../../Hooks/useBookings";

const MyBookings = () => {
  const [bookings] = useBookings();

  // Function to handle applying for discount
  const handleApplyDiscount = () => {
    // Logic for applying discount
    console.log("Congratulations! You've got a discount.");
  };

  return (
    <div>
      <h2>My Bookings</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Tour Guide Name</th>
            <th>Tour Date</th>
            <th>Tour Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tripTitle}</td>
              <td>{booking.selectedGuide}</td>
              <td>{booking.tourDate}</td>
              <td>${booking.price}</td>
              <td>{booking.status}</td>
              <td>
                {booking.status === 'In Review' && (
                  <button onClick={() => console.log('Cancel')}>
                    Cancel
                  </button>
                )}
                {booking.status === 'In Review' && (
                  <button
                    onClick={() => console.log('Apply')}
                    disabled={bookings.length <= 3}
                  >
                    Apply
                  </button>
                )}
                {booking.status === 'Accepted' && (
                  <button onClick={() => console.log('Pay')}>
                    Pay
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {bookings.length > 3 && (
        <div>
          <p>Congratulations! You've got a discount.</p>
          <button onClick={handleApplyDiscount} disabled={true}>
            Apply Discount
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
