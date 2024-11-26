import About from "./About"
import Banner from "./Banner"
import CarRent from "./CarRent"
import DiscoverBrand from "./DiscoverBrand"
import DiscoverStyle from "./DiscoverStyle"
import Service from "./Service"


const Home = () => {
  return (
    <div>
        <Banner />
        <div className="bg-gray-100">
        <DiscoverBrand />
        <DiscoverStyle />
        <CarRent />
        {/* <Service />
        <About /> */}
        </div>
    </div>
  )
}

export default Home