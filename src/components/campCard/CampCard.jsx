import { IoLocationSharp, IoPeople } from "react-icons/io5";
import PropTypes from "prop-types";
import { MdDateRange } from "react-icons/md";
import {
  FaArrowAltCircleRight,
  FaCalendarAlt,
  FaRegClock,
  FaStarHalfAlt,
} from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CampCard = ({ popularCamp }) => {
  const {
    _id,
    imageLink,
    campName,
    description,
    campFee,
    campTime,
    campLocation,
    participantCount,
    rating,
    healthcareProfessionalName,
  } = popularCamp;

  const campTimeArr = campTime.split("T");
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-1000 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div>
        <img className="rounded-t-lg h-80 mx-auto" src={imageLink} alt="" />
      </div>
      <div className="flex gap-1 items-center px-4 mb-3 mt-6 text-gray-700 dark:text-gray-400">
        <IoLocationSharp size={24} />
        <p>{campLocation}</p>
      </div>
      <div className="px-5">
        <div className="flex items-center justify-between py-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {campName}
          </h5>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <FaStarHalfAlt size={20} />
            <p>{rating}</p>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
          <FaUserDoctor size={20} />
          <p>{healthcareProfessionalName}</p>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <MdDateRange size={20} />
              <p>{campTimeArr[0]}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <FaRegClock size={20} />
              <p>{campTimeArr[1]}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <TbCoinTakaFilled size={20} />
              <p>{campFee}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <IoPeople size={20} />
              <p>{participantCount}</p>
            </div>
          </div>
        </div>
        <Link to={`/available-camp/${_id}`}>
          <button className="mb-6 gap-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Details
            <FaArrowAltCircleRight size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

CampCard.propTypes = {
  popularCamp: PropTypes.object.isRequired,
};

export default CampCard;
