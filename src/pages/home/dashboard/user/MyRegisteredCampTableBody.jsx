import PropTypes from "prop-types";

const MyRegisteredCampTableBody = ({ camp, index }) => {
  const {
    // _id,
    participantName,
    paymentStatus,
    confirmationStatus,
    campDetailsObject,
  } = camp;

  const handleOnclick = () => {
    console.log("clicked");
  };

  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{index + 1}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {participantName}
        </th>

        {/* <td className="px-6 py-4">
          <img src={imageLink} className="w-12" alt="" />
        </td> */}
        <td className="px-6 py-4">{campDetailsObject?.campName}</td>
        <td className="px-6 py-4">{campDetailsObject?.campFee} Tk</td>
        <td className="px-6 py-4">
          <span
            className={`rounded-full px-3 py-2 text-gray-900 ${
              paymentStatus === "Unpaid"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {paymentStatus}
          </span>
        </td>
        <td className="px-6 py-4">
          <span
            className={`rounded-full px-3 py-2 text-gray-900 ${
              confirmationStatus === "Pending"
                ? "bg-red-50 text-red-600"
                : confirmationStatus === "Rejected"
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-600"
            }`}
          >
            {confirmationStatus}
          </span>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={handleOnclick}
            disabled={paymentStatus === "Paid"}
            className={`px-2 py-1 text-white bg-green-500 rounded`}
          >
            Pay
          </button>
        </td>
        <td className="px-6 py-4">
          {paymentStatus === "Paid" ? (
            <p>Not Permitted</p>
          ) : (
            <button
              onClick={handleOnclick}
              disabled={confirmationStatus === "Confirmed"}
              className={`px-2 py-1 text-white bg-red-500 rounded`}
            >Cancel</button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

MyRegisteredCampTableBody.propTypes = {
  camp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default MyRegisteredCampTableBody;
