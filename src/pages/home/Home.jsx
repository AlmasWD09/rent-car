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
        <DiscoverBrand />
        <DiscoverStyle />
        <CarRent />
        {/* <Service />
        <About /> */}
    </div>
  )
}

export default Home