import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";
import UpdateModal from "../myAddedCamp/UpdateModal";

const ManageRegisteredCampBody = ({
  camp,
  index,
  handleDelete,
  refetch
}) => {
  const {
    _id,
    participantName,
    phoneNumber,
    paymentStatus,
    confirmationStatus,
    campDetails
  } = camp;

  const [showModal, setShowModal] = useState(false);


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
        <td className="px-6 py-4">
          {campDetails?.campFee}
        </td>
        <td className="px-6 py-4">
          {phoneNumber}
        </td>
        <td className="px-6 py-4"><span className={`rounded-full px-3 py-2 text-gray-900 ${paymentStatus === 'Unpaid'? 'bg-red-300' : 'bg-green-300'}`}>{paymentStatus}</span></td>
        <td className="px-6 py-4"><span className={`rounded-full px-3 py-2 text-gray-900 ${paymentStatus === 'Unpaid'? 'bg-red-300' : 'bg-green-300'}`}>{confirmationStatus}</span></td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
            >
              <FaRegEdit size={20} />
            </button>

            {showModal && (
              <UpdateModal setShowModal={setShowModal} camp={camp} refetch={refetch} />
            )}
            <button
              onClick={() => handleDelete(_id)}
              className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
            >
              <MdDeleteForever size={20} />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

ManageRegisteredCampBody.propTypes = {
  camp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired
};

export default ManageRegisteredCampBody;
