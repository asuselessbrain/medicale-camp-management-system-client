import PropTypes from "prop-types";
import PaymentModal from "./PaymentModal";

const MyRegisteredCampTableBody = ({
  camp,
  index,
  handleModal,
  isModalOpen,
  closeModal,
}) => {
  const {
    participantName,
    paymentStatus,
    confirmationStatus,
    campDetailsObject,
  } = camp;

  return (
    <>
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <td className="px-6 py-4">{index + 1}</td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {participantName}
          </th>
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
              onClick={() => handleModal(camp._id)} // Pass the camp ID
              disabled={paymentStatus === "Paid"}
              className={`px-2 py-1 text-white rounded ${
                paymentStatus === "Paid"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500"
              }`}
            >
              Pay
            </button>
          </td>
          <td className="px-6 py-4">
            {paymentStatus === "Paid" ? (
              <p>Not Permitted</p>
            ) : (
              <button
                disabled={confirmationStatus === "Confirmed"}
                className={`px-2 py-1 text-white rounded ${
                  confirmationStatus === "Confirmed"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500"
                }`}
              >
                Cancel
              </button>
            )}
          </td>
        </tr>
      </tbody>
      {isModalOpen && (
        <PaymentModal
          campFee={campDetailsObject?.campFee}
          campName = {campDetailsObject?.campName}
          handleModal={closeModal}
        />
      )}
    </>
  );
};

MyRegisteredCampTableBody.propTypes = {
  camp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default MyRegisteredCampTableBody;
