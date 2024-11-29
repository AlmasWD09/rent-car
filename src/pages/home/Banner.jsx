import { GoLocation } from "react-icons/go";
import { CgCalendarDates } from "react-icons/cg";

const Banner = () => {
  return (
    <section className="bg-gray-200 py-10 md:py-16 ">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 ">
        <div className="w-full  lg:w-[35%] 2xl:ml-24 2xl:pl-24 xl:ml-16 xl:pl-6  lg:ml-4 lg:pl-0  space-y-2 ">
          <h1 className="md:max-w-md lg:max-w-lg text-5xl md:text-7xl font-BebasNeue pl-4 lg:pl-0">
            WE PROVIDE <span className="text-primary">LUXURY CARS</span> FOR
            RENT
          </h1>
          <p className="max-w-xs pl-4 lg:pl-0">
            Drive in Style with Our Car Rental Services! Explore the World at
            Your Own Pace - Rent Now & Save
          </p>
        </div>

        <div className="w-full flex justify-end lg:w-[65%]  ">
          <img className="w-full" src="/images/banner/banner01.png" alt="car" />
        </div>
      </div>

      {/* form */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="bg-white max-w-7xl flex flex-wrap md:flex-row items-center gap-20 rounded-md px-4 py-4">
          <div className="flex items-center gap-2">
            <GoLocation className="text-3xl text-primary " />
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Location
              </label>
              <input
                className="outline-none"
                type="text"
                placeholder="select your location"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:border-l-2 border-gray-300 lg:px-6">
            <CgCalendarDates className="text-3xl text-primary" />
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Pickup date
              </label>
              <input
                className="outline-none"
                type="text"
                placeholder="Tue 15 Feb, 09:00"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:border-l-2 border-gray-300 lg:px-6">
            <CgCalendarDates className="text-3xl text-primary" />
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="">
                Return date
              </label>
              <input
                className="outline-none"
                type="text"
                placeholder="Tue 15 Feb, 9:00"
              />
            </div>
          </div>

          <div>
            <button className="bg-primary hover:bg-primaryGray text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;