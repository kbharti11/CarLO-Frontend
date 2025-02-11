import React from 'react'
import CarCards from '../../Components/CarCards'
import h1 from '../../assets/2.jpg'
import F296GTB from '../../assets/Images/Ferrari/296 GTB/1.jpg'
import F8Tributo from '../../assets/Images/Ferrari/F8 TRIBUTO/1.jpg'
import Roma from '../../assets/Images/Ferrari/ROMA/1.jpg'

export default function Ferrari() {
  return (
    <div>
       <CarCards link={"/F296GTB"} image={F296GTB} brand={"Ferrari"} car={"Ferrari 296 GTB"} price={"Rs.5.40 Cr*"} fuelType={"Petrol"} mileage={"10.26km/l"} transmission={"Automatic(DCT)"}
      />
   
      <CarCards link={"/F8Tributo"} image={F8Tributo} brand={"Ferrari"} car={"Ferrari F8 Tributo"} price={"Rs.4.02 Cr*"} fuelType={"Petrol"} mileage={"7.7km/l"} transmission={"Automatic(DCT)"}
      />
     
      <CarCards link={"/Roma"} image={Roma} brand={"Ferrari"} car={"Ferrari Roma"} price={"Rs.3.76 Cr*"} fuelType={"Petrol"} mileage={"8.9Kkm/l"} transmission={"Automatic(DCT)"}
      />
    </div>
  )
}
