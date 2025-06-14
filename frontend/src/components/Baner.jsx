const Baner = () => {
  return (
    <div className="w-full h-[500px] bg-[url('/ab-main-img.jpg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-5 relative">
      <div className="ml-10 text-white max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Discover your next <br /> adventure
        </h1>
        <p className="mb-6 text-lg">
          Choose from our curated experiences customized for every kind of traveler.
        </p>
        <button className="bg-yellow-500 text-black px-6 py-1 rounded-full hover:bg-gray-200 transition cursor-pointer">
          Book Now
        </button>
      </div>
      <div className="flex gap-3 w-fit absolute bottom-0 p-5 bg-black opacity-70 text-white">
        <h4>Easy booking</h4>
        <span>|</span>
        <h4>curated destinations</h4>
        <span>|</span>
        <h4>trusted support</h4>
      </div>
    </div>
  );
};

export default Baner