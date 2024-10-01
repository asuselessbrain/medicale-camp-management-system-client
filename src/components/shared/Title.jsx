import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <h2 className="text-7xl my-10 mx-auto font-semibold text-center font-dancing-script mt-2 text-blue-500">
      {title}
    </h2>
  );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
