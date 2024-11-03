const TableHead = ({ col1, col2, col3, col4, col5, col6, col7 }) => {
  return (
    <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3"></th>
        <th scope="col" className="px-6 py-3">
          {col1}
        </th>
        <th scope="col" className="px-6 py-3">
          {col2}
        </th>
        <th scope="col" className="px-6 py-3">
          {col3}
        </th>
        <th scope="col" className="px-6 py-3">
          {col4}
        </th>
        <th scope="col" className="px-6 py-3">
          {col5}
        </th>
        <th scope="col" className="px-6 py-3">
          {col6}
        </th>
        <th scope="col" className="px-6 py-3">
          {col7}
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
