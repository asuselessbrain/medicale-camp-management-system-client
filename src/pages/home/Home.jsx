// import Spinner from "../../components/spinner/Spinner";
import ShowUser from "./dashboard/admin/users/ShowUser";
import PopularCamp from "./popularCamp/PopularCamp";
// import AddCamp from "./dashboard/organizer/addCamp/AddCamp";
// import MyAddedCamp from "./dashboard/organizer/myAddedCamp/MyAddedCamp";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Slider />
      <ShowUser />
      {/* <AddCamp /> */}
      {/* <MyAddedCamp /> */}
      <PopularCamp />
    </div>
  );
};

export default Home;
