// import Spinner from "../../components/spinner/Spinner";
// import LoadUser from "./dashboard/admin/users/LoadUser";
import CampCard from "../../components/campCard/CampCard";
import AddCamp from "./dashboard/organizer/addCamp/AddCamp";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Slider />
      {/* <LoadUser /> */}
      <AddCamp />
      <CampCard />
    </div>
  );
};

export default Home;
