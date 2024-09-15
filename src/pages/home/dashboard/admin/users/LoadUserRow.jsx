import PropTypes from "prop-types";

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
          <img src={imageUrl} alt="userImage" width={46} />
        </td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phoneNumber}</td>
        <td className="px-6 py-4">
          {new Date(registrationTime).toLocaleString()}
        </td>
        <td className="px-6 py-4">
          {new Date(lastLoginTime).toLocaleString()}
        </td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
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
