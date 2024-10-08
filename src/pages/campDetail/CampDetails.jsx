import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosProtected from "../../hooks/useAxiosProtected";
import Spinner from "../../components/spinner/Spinner";
import {
  CiBadgeDollar,
  CiCircleCheck,
  CiLocationOn,
  CiStethoscope,
  CiUser,
} from "react-icons/ci";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CampDetails = () => {
  const { id } = useParams();
  const axiosProtected = useAxiosProtected();
  // const [ratings, setRating] = useState(rating);

  const { data: campData = [], isPending } = useQuery({
    queryKey: ["campData"],
    queryFn: async () => {
      const { data } = await axiosProtected(`/view-camp-details/${id}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

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
    publishDate,
  } = campData;

  return (
    <div style={{minHeight: 'calc(100vh - 120px)'}} className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1">
        <h2>{campName}</h2>
      </div>
      <div>
        <img className="rounded" src={imageLink} alt="" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-6 md:gap-0 ">
        <p className="text-2xl font-semibold">Camp Fee: {campFee}</p>
        <p className="flex items-center gap-2 text-2xl font-semibold">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </p>
      </div>
      <button className="bg-black text-white px-6 py-4 rounded-xl border-none font-semibold">Join Now</button>
      </div>
    </div>
  );
};

export default CampDetails;
