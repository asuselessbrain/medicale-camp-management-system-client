import PropTypes from "prop-types"

const ResetPassword = ({handleResetPasswordToggle}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 max-w-xs mx-auto">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-gray-800 font-bold mb-4">
          Please Check your email for set new password
        </h2>
        <button
          onClick={handleResetPasswordToggle}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};
ResetPassword.propTypes = {
    handleResetPasswordToggle: PropTypes.func.isRequired,
}
export default ResetPassword;
