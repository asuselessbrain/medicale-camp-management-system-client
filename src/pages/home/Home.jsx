import LoadUser from "./dashboard/admin/users/LoadUser";
import AddCamp from "./dashboard/organizer/addCamp/AddCamp";
import Slider from "./slider/Slider";

const Home = () => {
    return (
        <div>
           <Slider />
           {/* <LoadUser /> */}
           <AddCamp />
        </div>
    );
};

export default Home;