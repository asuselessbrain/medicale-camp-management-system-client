import { Link } from "react-router-dom";
import image from "../../assets/images/productNotFound.png";

const NoCampFound = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-around px-5 text-gray-700">
        <div className="max-w-md">
          <p className="text-2xl  md:text-4xl font-semibold mb-6 leading-normal">
            Sorry we could not find any camp.{" "}
          </p>
          <p className="mb-8">
            But do not worry, you can find plenty of other things on our homepage.
          </p>

          <Link to="/" className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            back to homepage
          </Link>
        </div>
        <div className="max-w-lg">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoCampFound;
