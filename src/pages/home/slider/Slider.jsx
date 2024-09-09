import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel>
        <div>
        <img src="https://i.ibb.co.com/S7hVzTX/slider4.png" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/jZTwjjN/slider3.png" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/PZbwvrs/slider2.png" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/VQdsNVb/slider1.png" />
      </div>
    </Carousel>
  );
};

export default Slider;
