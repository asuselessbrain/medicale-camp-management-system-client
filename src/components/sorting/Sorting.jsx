const Sorting = () => {
  return (
    <div className="max-w-2xl mx-auto">
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue="">Choose a country</option>
          <option value="ascending">Camp Fee Low to High</option>
          <option value="descending">Camp Fee High to Low</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
      </select>
  </div>
  );
};

export default Sorting;
