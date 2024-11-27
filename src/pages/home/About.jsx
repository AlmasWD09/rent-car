import SectionHeading from "../../components/shared/SectionHeading"


const About = () => {
  return (
    <section className="pt-40">
      <SectionHeading 
      text1={"About Us"}
      text2={"know more"}
      text3={"ABOUT US"}
      />

    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20">
      {/* image */}
      <div className="w-full lg:w-1/2 ">
        <img src="/images/about/photo01.png" alt="car" />
      </div>
      {/* content */}
      <div className="w-full lg:w-1/2  lg:pr-20 space-y-3 px-4">
        <h2 className="text-3xl font-semibold font-Poppins">Welcome to <span className="text-primary">QEEQ.COM</span></h2>
        <p className="text-wrap">QEEQ.COM is a leading name in the car rental industry, committed to providing exceptional service and a diverse fleet of vehicles for all your travel needs in Jaipur. Our journey began with a vision to redefine car rentals by focusing on quality, reliability, and customer satisfaction.At QEEQ.COM, we strive to make your journey comfortable, convenient, and memorable in the vibrant city of Jaipur. We understand the diverse needs of our customers in Jaipur and work tirelessly to offer solutions that best suit them. Whether it's a family vacation, a business trip, or a special event in Jaipur, we have the perfect ride for every occasion.</p>
      </div>
    </div>
    </section>
  )
}

export default About