

const CarCart = ({car}) => {
    const {image, bandImage, name, icon01, icon02, icon03, text01, text02, text03, day} = car || {}
  return (
    <div>
        <div className="w-full lg:max-w-md md:h-[370px] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-end items-center gap-1">
            <img
              src={bandImage}
              alt="Brand Logo"
              className="w-6 h-6"
            />
            <h2 className="text-lg font-semibold">{name}</h2>
          </div>

          {/* Car Image */}
          <img
            src={image} alt="Car Image"
            className="w-full h-[200px] object-contain rounded-md py-3"
          />

          {/* Info Section */}
          <div className="flex justify-between text-sm bg-gray-100 text-gray-600 py-2 px-2 rounded-md">
            {/* Miles */}
            <div className="flex flex-col items-center">
              <img className="w-6" src={icon01} alt="car icon" />
              <span>{text01}</span>
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col items-center">
            <img className="w-4 h-4" src={icon02} alt="car icon" />
              <span>{text02}</span>
            </div>

            {/* Transmission */}
            <div className="flex flex-col items-center">
            <img className="w-4 h-4" src={icon03} alt="car icon" />
              <span>{text03}</span>
            </div>
          </div>

          {/* details button */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">${day}</p>
            <button className="px-6 py-1.5 bg-primary hover:bg-primaryGray text-white rounded-full">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCart