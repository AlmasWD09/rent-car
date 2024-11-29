import { CgCalendarDates } from "react-icons/cg"
import { GoLocation } from "react-icons/go"
import { OurVehicle } from "./OurVehicle"

const Vehicles = () => {
    return (
        <section className="bg-gray-100 pb-10">
            <div className="bg-[url('assets/vehance.png')] bg-cover pt-20 lg:pt-60  w-full flex flex-col justify-center items-center ">
                <h1 className="uppercase  font-BebasNeue text-5xl lg:text-9xl text-white/60">
                    vehicles
                </h1>
                {/* form */}
                <div className="w-full flex justify-center py-16 px-4">
                    <div className="bg-white max-w-7xl flex flex-wrap md:flex-row items-center gap-20 rounded-md px-4 py-4">
                        <div className="flex items-center gap-2">
                            <GoLocation className="text-3xl text-primary " />
                            <div className="flex flex-col">
                                <label className="font-semibold" htmlFor="">Location</label>
                                <input className="outline-none" type="text" placeholder="select your location" />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 lg:border-l-2 border-gray-300 lg:px-6">
                            <CgCalendarDates className="text-3xl text-primary" />
                            <div className="flex flex-col">
                                <label className="font-semibold" htmlFor="">Pickup date</label>
                                <input className="outline-none" type="text" placeholder="Tue 15 Feb, 09:00" />
                            </div>

                        </div>
                        <div className="flex items-center gap-2 lg:border-l-2 border-gray-300 lg:px-6">
                            <CgCalendarDates className="text-3xl text-primary" />
                            <div className="flex flex-col">
                                <label className="font-semibold" htmlFor="">Return date</label>
                                <input className="outline-none" type="text" placeholder="Tue 15 Feb, 9:00" />
                            </div>
                        </div>
                        <div>
                            <button className="bg-primary hover:bg-primaryGray text-white px-4 py-2 rounded-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* another component here.. */}
            <OurVehicle />

        </section>

    )
}

export default Vehicles