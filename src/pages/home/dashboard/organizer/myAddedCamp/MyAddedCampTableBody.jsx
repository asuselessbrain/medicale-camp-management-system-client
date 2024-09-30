import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import PropTypes from "prop-types";

const MyAddedCampTableBody = ({
  camp,
  index,
  handleDelete,
}) => {
  const {
    _id,
    campName,
    imageLink,
    campFee,
    campTime,
    campLocation,
    healthcareProfessionalName,
    organizerEmail,
    organizerName,
  } = camp;

  const [showModal, setShowModal] = useState(false);

  const timeArray = campTime.split("T");

  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{index + 1}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {campName}
        </th>

        <td className="px-6 py-4">
          <img src={imageLink} className="w-12" alt="" />
        </td>
        <td className="px-6 py-4">{campFee} Tk</td>
        <td className="px-6 py-4">
          {timeArray[0]} 
        </td>
        <td className="px-6 py-4">
          {timeArray[1]}
        </td>
        <td className="px-6 py-4">{campLocation}</td>
        <td className="px-6 py-4">{healthcareProfessionalName}</td>
        <td className="px-6 py-4">{organizerName}</td>
        <td className="px-6 py-4">{organizerEmail}</td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
            >
              <FaRegEdit size={20} />
            </button>

            {showModal && (
              <UpdateModal setShowModal={setShowModal} camp={camp} />
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

MyAddedCampTableBody.propTypes = {
  camp: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default MyAddedCampTableBody;
