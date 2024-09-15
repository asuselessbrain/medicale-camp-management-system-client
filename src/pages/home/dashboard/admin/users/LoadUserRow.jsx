import PropTypes from "prop-types";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";

const LoadUserRow = ({ user, index }) => {
  const {
    name,
    imageUrl,
    email,
    phoneNumber,
    registrationTime,
    lastLoginTime,
  } = user;

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">
          <img src={imageUrl} alt="userImage" className="rounded" width={46} />
        </td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phoneNumber}</td>
        <td className="px-6 py-4">
          {new Date(registrationTime).toLocaleString()}
        </td>
        <td className="px-6 py-4">
          {new Date(lastLoginTime).toLocaleString()}
        </td>
        <td className="px-6 py-4 text-right flex items-center gap-2">
          <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
          <LiaEditSolid size={24} />
          </button>
          <button className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white">
          <MdDeleteForever size={24} />
          </button>
        </td>

      </tr>
    </tbody>
  );
};

LoadUserRow.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LoadUserRow;
