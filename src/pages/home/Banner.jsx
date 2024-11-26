import { GoLocation } from "react-icons/go";
import { CgCalendarDates } from "react-icons/cg";

const Banner = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="flex justify-between items-center gap-6">
        <div className="w-[35%] ml-24 space-y-2">
          <h1 className="max-w-lg text-7xl  font-BebasNeue">WE PROVIDE <span className="text-primary">LUXURY
          CARS</span> FOR RENT</h1>
          <p className="max-w-xs">Drive in Style with Our Car Rental Services! Explore the World at Your Own Pace - Rent Now & Save</p>
        </div>
        <div className="w-[65%] border ">
          <img className="" src="/images/banner/banner01.png" alt="car" />
        </div>
      </div>


      <div className="w-full flex justify-center mt-10">
      <div className="bg-white max-w-7xl flex items-center gap-20 rounded-md px-4 py-4">
        <div className="flex items-center gap-2">
          <GoLocation className="text-3xl text-primary "/>
          <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">Location</label>
          <input className="outline-none" type="text" placeholder="select your location"/>
          </div>
        </div>

        <div className="flex items-center gap-2 border-l-2 border-gray-300 px-6">
          <CgCalendarDates className="text-3xl text-primary"/>
          <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">Pickup date</label>
          <input className="outline-none" type="text" placeholder="Tue 15 Feb, 09:00"/>
          </div>

        </div>
        <div className="flex items-center gap-2 border-l-2 border-gray-300 px-6">
          <CgCalendarDates className="text-3xl text-primary"/>
          <div className="flex flex-col">
          <label className="font-semibold" htmlFor="">Return date</label>
          <input className="outline-none" type="text" placeholder="Tue 15 Feb, 9:00"/>
          </div>
        </div>
     
  
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Search</button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Banner