import { FaCar } from "react-icons/fa";
import { LiaGasPumpSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import BookingModal from "../../components/shared/BookingModal";
import sec from "/images/details/secondary.png"
import vec1 from "/images/details/Vector (1).png"
import vec2 from "/images/details/Vector (2).png"
import vec3 from "/images/details/Vector (3).png"
import CarCart from "../../components/shared/CarCart";
import { useParams } from "react-router-dom";

const CarDetails = () => {
    const id = useParams()
    console.log(id)
    const [modal, setModal] = useState(false);
    const [cars, setCars] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await fetch("/carRent.json");
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error("Error loading data:", error);
            }
            };
            fetchData();
        }, []);
    const singleCar = cars.find(car => car.id === parseInt(id.id))
   

    return (
         <section className="bg-slate-200 py-10 min-h-screen">
            <div className="container mx-auto px-4 ">
               {/* car info */}
               <div className="bg-white shadow-2xl p-4 lg:p-8 rounded-[40px]">
                  <div className="md:flex gap-5 lg:gap-10">
                    <img className="md:w-3/5 object-contain object-center transform scale-x-[-1]" src={singleCar?.image} alt="" />
                    <div className="md:w-2/5 lg:pl-24 mt-8 lg:mt-0">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="lg:text-[28px] text-2xl mb- font-semibold text-[#2572D3]">{singleCar?.name}</h3>
                                <h4 className="lg:text-[28px] text-2xl font-semibold">Location: Dubai</h4>
                            </div>
                            <img src={singleCar?.bandImage} alt="" />
                        </div>
                        <div className="flex items-center my-5 gap-14">
                            <div className="text-[#D7D7D7] text-xl font-semibold">
                                <p>24-06-2024</p>
                                <p>09:30 AM</p>
                            </div>
                            <p className="font-semibold text-xl">To</p>
                            <div className="text-[#D7D7D7] text-xl font-semibold">
                                <p>24-06-2024</p>
                                <p>09:30 AM</p>
                            </div>
                        </div>
                        <p className="text-[#D7D7D7] text-xl font-semibold border-b lg:pb-10 pb-7">Duration 3 days</p>
                        <div className="flex gap-16">
                        <p className="text-[#000000] text-xl font-semibold lg:pt-10 pt-6">Package Type</p>
                        <p className="text-[#4c4b4b] text-xl font-semibold lg:pt-10 pt-6">200 Kms/day</p>
                        </div>

                    </div>
                    <div>
                      
                    </div>
                  </div>
                  {/* second div */}
                  <div className="lg:p-16 py-6 lg:py-0">
                    <h4 className="text-[28px] font-semibold text-[#2572D3]">Car Details</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 justify-between my-5 ">
                           
                            <div className="flex lg:gap-4 gap-1">
                             <img src={sec} className="w-4 h-4 mt-2" alt="" />
                                 <div className="mb-6">
                               
                                 <p className="font-medium text-lg lg:text-2xl">Automatic</p>
                                 <p className="text-[#4c4b4b] text-base lg:text-xl font-medium">2000 CC</p>
                                 <p className="text-[#4c4b4b] text-base lg:text-xl font-medium">300 bhp</p>
                                 </div>
                                 
                            </div>
                            
                            <div className="flex lg:gap-4 gap-1">
                            <p className="font-medium mt-1 text-2xl"><LiaGasPumpSolid /></p>
                                 <div className="mb-6">
                               
                                 <p  className="font-medium text-lg lg:text-2xl">Petrol</p>
                                 <p  className="text-[#D7D7D7]  text-base lg:text-xl font-medium">17 km Milage</p>
                                 
                                 </div>
                                 
                            </div>
                           
                            <div className="flex lg:gap-4 gap-1">
                            <p className="font-medium mt-1 text-2xl"><FaCar /></p>
                                 <div className="mb-6">
                               
                                 <p  className="font-medium mb-3 lg:mb-6 text-lg lg:text-2xl">4 Seater</p>
                                 <p  className="text-[#D7D7D7] text-base font-medium">2 doors</p>
                                 
                                 </div>
                                 
                            </div>
                        </div>
                        <div className="border-2 border-[#000000] rounded-2xl p-4">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <img src={vec1} alt="" />
                                <h4 className="lg:text-2xl text-xl font-semibold">Insurance</h4>
                                </div>
                                <h4 className="lg:text-2xl text-xl font-semibold">Included</h4>
                            </div>
                            <div className="flex mt-6 justify-between">
                                 <div className="flex gap-2">
                                    <img src={vec2} alt="" />
                                 <h4 className="lg:text-2xl text-xl font-semibold">Fuel</h4>
                                 </div>
                                <h4 className="lg:text-2xl text-xl font-semibold">Not Included </h4>
                            </div>
                            <div></div>
                        </div>
                  </div>
                 
               </div>
                {/* booking summary */}
                <div className="lg:p-20 py-16">
                  <h4 className="lg:text-[28px] text-2xl lg:mb-8 mb-5 font-semibold text-[#2572D3]">Booking Summary</h4>
                  <div className="flex justify-between lg:mb-5 mb-3">
                  <p className="font-semibold text-xl lg:text-2xl">Rental Charge</p>
                  <p className="font-semibold text-xl lg:text-2xl">$750</p>
                  </div>
                  <div className="flex justify-between">
                  <p className="font-semibold text-xl lg:text-2xl">GST</p>
                  <p className="font-semibold text-xl lg:text-2xl">$300</p>
                  </div>
                  <div className="flex items-center my-5 lg:w-2/3 border border-gray-300 rounded-md p-2 bg-gray-100">
                    <span className="text-blue-600 text-xl mr-2">
                        
                        <img src={vec3} alt="" />
                    </span>
                    <input
                        type="text"
                        placeholder="Promo code"
                        className="bg-transparent text-2xl outline-none text-gray-600 w-full"
                    />
                    </div>
                   <div className="flex justify-between">
                    <p className="font-semibold text-xl lg:text-2xl text-[#2572D3]">Total Amount</p>
                    <p className="font-semibold text-xl lg:text-2xl">$1050</p>
                    </div>
                    <div className="flex justify-center">
                    <button  onClick={() => setModal(true)} className="bg-[#2572D3] lg:my-20 my-14 text-white text-3xl lg:text-[35px] font-medium p-5 lg:p-[10px] rounded-lg w-full md:w-[470px]">Booking now</button>
                    </div>
                    {/* modal */}
                    {modal && <BookingModal closeModal={() => setModal(false)} />}

                  
                  </div>
                    {/* others option */}
                    <div>
                       
                       <h2 className="font-BebasNeue  text-center text-4xl lg:text-6xl">Other options <span className="text-primary">you might like</span></h2>
                       <div className="grid lg:my-16 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                           {
                           cars.slice(0,3).map((car,idx)=>{
                               return(
                               <CarCart key={idx} car={car}/>
                               )
                           })
                           }
                       </div>
                    </div>
            </div>
        </section>
    );
};

export default CarDetails;