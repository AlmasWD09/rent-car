import SectionHeading from "../../components/shared/SectionHeading"

const DiscoverBrand = () => {
  return (
    <section className="px-4 pt-20">
      <div>
        <SectionHeading text1={"BRANDS"} text2={"Discover by"} text3={"brands"}/>

        {/* discover brand image */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          <img src="/images/discoverBrand/photo01.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo02.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo03.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo04.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo06.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo07.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo08.png" alt="brand icon" />
          <img src="/images/discoverBrand/photo09.png" alt="brand icon" />
        </div>
      </div>
    </section>
  )
}

export default DiscoverBrand