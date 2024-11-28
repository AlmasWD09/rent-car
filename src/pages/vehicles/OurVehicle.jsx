import React, { useEffect, useState } from 'react'
import SectionHeading from '../../components/shared/SectionHeading'
import CarCart from '../../components/shared/CarCart';

export const OurVehicle = () => {
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
    <section className='container mx-auto px-4 pt-20'>
        <SectionHeading 
        text1={"vehicles"}
        text2={"our"}
        text3={"vehicles"}
        />
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          cars.map((car,idx)=>{
            return(
              <CarCart key={idx} car={car}/>
            )
          })
        }
      </div>
        </div>
    </section>
  )
}
