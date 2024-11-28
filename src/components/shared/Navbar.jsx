import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../../../assets/blood-logo.png"
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import Button from "./Button";
import BookingModal from "./BookingModal";


const Navbar = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleNavigaet = () => {
    navigate("/");
  };

  // background color add in navbar scroll
  const changeBackground = () => {
    if (window.scrollY >= 32) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

 
  return (
    <>
      <header
        className={
          navbar
            ? "bg-gray-200 sticky top-0 left-0 z-[99999] shadow-md w-full   py-4 lg:py-6  overflow-visible"
            : "sticky top-0 left-0 z-[999] shadow-md w-full py-4 lg:py-6  overflow-visible "
        }
      >
        <div className="container mx-auto px-4 flex items-center">
          <nav className="relative container flex justify-between items-center">
            {/* navbar website name and logo */}
            <div className=" w-full lg:w-[20%]">
              <div onClick={handleNavigaet} className="cursor-pointer">
                {/* <h1 className="text-3xl lg:text-4xl text-primary font-bold font-Poppins">
                  Rent Car
                </h1> */}
                <img src="/images/icon/navlogo.png" alt="navLogo" />
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                  isOpen ? "navbarTogglerActive" : ""
                }`}
              >
                {!isOpen ? (
                  <TfiClose className="text-2xl " />
                ) : (
                  <VscMenu className="text-2xl " />
                )}
              </button>
            </div>

            {/* mobile menu */}
            <div
              className={`${
                isOpen ? "-right-full" : "right-0"
              }  w-2/3 h-screen p-4 fixed  top-[67px] md:top-[65px] z-[999999] bg-gray-200  shadow-md flex flex-col space-y-4 my-transition`}
            >
              <div className="flex flex-col lg:hidden space-y-4">
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/">
                  <Button text={" Home"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/vehicles">
                  <Button text={"Vehicles"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/about">
                  <Button text={"About Us"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/contact">
                  <Button text={"Contact Us"} />
                </NavLink>

                {/* navbar Sign Up and login button */}
                <div className="w-full bg-primary/60 ">
                  <button className="w-full bg-primary rounded-md text-white text-lg  font-semibold font-Poppins px-4 py-2 ">
                    Booking now
                  </button>
                </div>
              </div>
            </div>

            {/* tablet & dastop munu items*/}
            <div className=" w-[60%] lg:flex lg:justify-center lg:items-center items-center hidden">
              <div className="flex items-center">
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/">
                  <Button text={" Home"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/Vehicles">
                  <Button text={"Vehicles"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/about">
                  <Button text={"About Us"} />
                </NavLink>
                <NavLink style={({isActive})=> isActive? {color: "#3b82f6",background:"none"}:{}} to="/contact">
                  <Button text={"Contact Us"} />
                </NavLink>
              </div>
            </div>
            {/* navbar signup and login button */}
            <div className=" w-[20%] lg:flex lg:justify-end hidden">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setModal(true)}
                  className="bg-primary text-white text-lg  font-semibold font-Poppins px-4 py-2 rounded-md"
                >
                  Booking now
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {modal && <BookingModal closeModal={() => setModal(false)} />}
    </>
  );
};

export default Navbar;
