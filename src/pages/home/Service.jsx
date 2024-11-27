import SectionHeading from "../../components/shared/SectionHeading"


const Service = () => {
  return (
    <section className="container mx-auto px-4 pt-40">
      <SectionHeading
        text1={"Services"}
        text2={"our"}
        text3={"services"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* service 01 */}
        <div className=" flex flex-col justify-center items-center text-center">
        <div className="w-[100px] h-[100px] p-4 rounded-full flex justify-center items-center bg-primary">
          <img src="/images/services/service01.png" alt="service" />
        </div>
        <p>Car Rental <br /> 
        Services Near You</p>
        </div>
        {/* service 02 */}
        <div className=" flex flex-col justify-center items-center text-center">
        <div className="w-[100px] h-[100px] p-4 rounded-full flex justify-center items-center bg-primary">
          <img src="/images/services/service02.png" alt="service" />
        </div>
        <p>Self Drive <br /> Car Rental</p>
        </div>
        {/* service 03 */}
        <div className=" flex flex-col justify-center items-center text-center">
        <div className="w-[100px] h-[100px] p-4 rounded-full flex justify-center items-center bg-primary">
          <img src="/images/services/service03.png" alt="service" />
        </div>
        <p>Monthly Car <br /> Rental Plans</p>
        </div>
        {/* service 04 */}
        <div className=" flex flex-col justify-center items-center text-center">
        <div className="w-[100px] h-[100px] p-4 rounded-full flex justify-center items-center bg-primary">
          <img src="/images/services/service04.png" alt="service" />
        </div>
        <p>Specialty <br /> Vehicles</p>
        </div>
      </div>
    </section>
  )
}

export default Service