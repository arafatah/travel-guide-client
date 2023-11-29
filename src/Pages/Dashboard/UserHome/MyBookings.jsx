import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useBookings from "../../../Hooks/useBookings";
import { Helmet } from "react-helmet-async";
import Confetti from "react-confetti";

const MyBookings = () => {
  const [bookings, refetch] = useBookings();
  console.log(bookings);
  const axiosSecure = useAxiosSecure();

  const handleApplyDiscount = () => {
    console.log("Congratulations! You've got a discount.");
  };

  return (
    <div>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
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
                    {booking.status}
                  </span>
                </td>
                <td className="border p-2">
                  {booking.status === "pending" && (
                    <>
                      <button
                        className="text-sm text-red-500 btn-sm mr-2"
                        onClick={() =>
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              axiosSecure
                                .delete(`/booking/${booking._id}`)
                                .then((res) => {
                                  refetch();
                                  console.log(res);
                                  Swal.fire(
                                    "Booking Canceled!",
                                    "Your booking has been canceled.",
                                    "success"
                                  );
                                });
                            }
                          })
                        }
                      >
                        Cancel
                      </button>
                      <button
                        className="text-sm text-blue-500 btn btn-sm"
                        onClick={() => console.log("Apply")}
                        disabled={bookings.length <= 3}
                      >
                        Apply
                      </button>
                    </>
                  )}
                  {booking.status === "Approved" && (
                    <button
                      className="text-sm text-green-500 btn btn-sm px-4"
                      onClick={() => console.log("Pay")}
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
          <p className="text-green-500">
            Congratulations! You've got a discount.
          </p>
          <Confetti
            width={2000}
            height={1025}
            tweenDuration={1}
            recycle={true}
            numberOfPieces={500}
            initialVelocityX={82}
            initialVelocityY={50}
            gravity={0.1}
            tweenFunction={(
              currentTime,
              currentValue,
              targetValue,
              duration
            ) => {
              return (
                (targetValue - currentValue) * (currentTime / duration) +
                currentValue
              );
            }}
          />

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
