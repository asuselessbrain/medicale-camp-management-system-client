import img from "../../../../../assets/images/tickgreen-removebg-preview.png";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";

const ManageRegisteredCampBody = ({
  camp,
  index,
  updateConfirmationStatus,
}) => {
  const {
    _id,
    participantName,
    phoneNumber,
    paymentStatus,
    confirmationStatus,
    campDetails,
  } = camp;

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
        <td className="px-6 py-4">{campDetails?.campName} Tk</td>
        <td className="px-6 py-4">{campDetails?.campFee}</td>
        <td className="px-6 py-4">{phoneNumber}</td>
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
          <div className="flex items-center gap-2">
            {confirmationStatus === "Confirmed" ? (
              <button disabled title="No Action Permitted">
                <img src={img} alt="tick_mark" className="w-10" />
              </button>
            ) : confirmationStatus === "Rejected" ? (
              <button disabled title="No Action Permitted"
                className="flex p-2 bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300 text-white"
              >
                <RxCross2 size={16} />
              </button>
            ) : (
                <>
                  <button
                    onClick={() => updateConfirmationStatus(_id, "confirmed")}
                  >
                    <img src={img} alt="tick_mark" className="w-12" />
                  </button>
                  <button
                    onClick={() => updateConfirmationStatus(_id, "rejected")}
                    className="flex p-2 bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300 text-white"
                  >
                    <RxCross2 size={16} />
                  </button>
                </>
              )}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

ManageRegisteredCampBody.propTypes = {
  camp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateConfirmationStatus: PropTypes.func.isRequired,
};

export default ManageRegisteredCampBody;
