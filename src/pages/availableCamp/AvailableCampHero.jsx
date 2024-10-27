const AvailableCampHero = () => {
  return (
    <div
      className="hero mb-10 rounded py-40"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/LtgGy3B/st-theresa-college-medical-camp-05.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="text-7xl my-10 mx-auto font-semibold text-center font-dancing-script mt-2 text-white">
            Available Camp
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AvailableCampHero;
