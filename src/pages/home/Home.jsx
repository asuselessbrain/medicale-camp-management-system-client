// import Spinner from "../../components/spinner/Spinner";
// import LoadUser from "./dashboard/admin/users/LoadUser";
import PopularCamp from "./popularCamp/PopularCamp";
// import AddCamp from "./dashboard/organizer/addCamp/AddCamp";
// import MyAddedCamp from "./dashboard/organizer/myAddedCamp/MyAddedCamp";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Slider />
      {/* <LoadUser /> */}
      {/* <AddCamp /> */}
      {/* <MyAddedCamp /> */}
      <PopularCamp />
    </div>
  );
};

export default Home;
