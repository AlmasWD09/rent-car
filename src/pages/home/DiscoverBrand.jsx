

const DiscoverBrand = () => {
  return (
    <section>
      <div>
        <div className="text-center">
          <h4 className="font-BebasNeue text-4xl">BRANDS</h4>
          <h2 className="font-BebasNeue text-6xl">Discover by <span className="text-primary">brands</span></h2>
        </div>

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