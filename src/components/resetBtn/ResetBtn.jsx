import PropTypes from "prop-types"

const ResetBtn = ({handleReset}) => {
    return (
        <button
        type="button"
        onClick={handleReset}
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center"
      >
        Reset
      </button>
    );
};

ResetBtn.propTypes = {
    handleReset: PropTypes.func.isRequired
}

export default ResetBtn;