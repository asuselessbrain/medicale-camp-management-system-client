import PropTypes from "prop-types"

const Sorting = ({handleSorting}) => {

  return (
    <div className="max-w-2xl mx-auto">
          <select onClick={handleSorting} id="sortOrder" className="bg-blue-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Choose a country</option>
          <option value="ascending">Camp Fee Low to High</option>
          <option value="descending">Camp Fee High to Low</option>
          <option value="sortByParticipant">Most People Participant</option>
      </select>
  </div>
  );
};

Sorting.propTypes = {
  handleSorting: PropTypes.func.isRequired
}

export default Sorting;
