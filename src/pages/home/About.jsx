import SectionHeading from "../../components/shared/SectionHeading";

const About = () => {
  return (
    <section className="pt-40">
      <SectionHeading
        text1={"About Us"}
        text2={"know more"}
        text3={"ABOUT US"}
      />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 pb-10 ">
        {/* image */}
        <div className="w-full  lg:w-[60%] ">
          <img className="w-[90%]" src="/images/about/photo01.png" alt="car" />
        </div>
        {/* content */}
        <div className="w-full flex justify-center items-center  lg:w-[40%]   md:pr-16  px-4 ">
          <div className="space-y-6">
            <h2 className="text-4xl text-center font-semibold font-Poppins ">
              Welcome to <span className="text-primary">QEEQ.COM</span>
            </h2>
            <p className="text-wrap text-gray-700 text-xl font-medium">
              <span className="text-primary">QEEQ.COM </span> is a leading name
              in the car rental industry, committed to providing exceptional
              service and a diverse fleet of vehicles for all your travel needs
              in Jaipur. Our journey began with a vision to redefine car rentals
              by focusing on quality, reliability, and customer satisfaction.At{" "}
              <span className="text-primary">QEEQ.COM </span>, we strive to make
              your journey comfortable, convenient, and memorable in the vibrant
              city of Jaipur. We understand the diverse needs of our customers
              in Jaipur and work tirelessly to offer solutions that best suit
              them. Whether {"it's"} a family vacation, a business trip, or a
              special event in Jaipur, we have the perfect ride for every
              occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
