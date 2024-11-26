import { useEffect, useState } from "react";
import CarCart from "../../components/shared/CarCart";

const CarRent = () => {
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
  return (
    <section className="container mx-auto px-4 py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          cars.map((car,idx)=>{
            return(
              <CarCart key={idx} car={car}/>
            )
          })
        }
      </div>
    </section>
  );
};

export default CarRent;
