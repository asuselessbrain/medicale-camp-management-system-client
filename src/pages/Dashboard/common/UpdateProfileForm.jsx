import PropTypes from "prop-types";

const UpdateProfileForm = ({ handleUpdate }) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md p-6 rounded mx-auto bg-gray-200"
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-5">
      <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Profile Picture
        </label>
        <div className="relative flex items-center mb-2">
          <input name="image" type="file" className="file-input w-full" />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

UpdateProfileForm.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

export default UpdateProfileForm;
