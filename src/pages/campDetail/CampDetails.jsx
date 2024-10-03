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
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div>
        <h2>{campName}</h2>
      </div>
      <div>
        <img src={imageLink} alt="" />
      </div>
      <div>
        <p>Camp Fee: {campFee}</p>
        <p className="flex items-center gap-2">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> ({rating})
        </p>
      </div>
    </div>
  );
};

export default CampDetails;
