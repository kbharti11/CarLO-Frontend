import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Brands from './Pages/Brands.jsx'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login';
import About from './Components/About';
import Home from './Components/Home';
import Footer from './Components/Footer.jsx';
import Register from './Components/Register.jsx';
import BookingPage from './Components/BookingPage.jsx';

import Tata from './Pages/Brand/Tata.jsx';
import Maruti from './Pages/Brand/Maruti.jsx';
import Toyota from './Pages/Brand/Toyota.jsx';
import BMW from './Pages/Brand/BMW.jsx';
import Mahindra from './Pages/Brand/Mahindra.jsx';
import Audi from './Pages/Brand/Audi.jsx';
import Kia from './Pages/Brand/Kia.jsx';
import Jaguar from './Pages/Brand/Jaguar.jsx';
import Hyundai from './Pages/Brand/Hyundai.jsx';
import RollsRoyce from './Pages/Brand/RollsRoyce.jsx';
import MercedesBenz from './Pages/Brand/MercedesBenz.jsx';
import Lamborghini from './Pages/Brand/Lamborghini.jsx';
import AstonMartin from './Pages/Brand/AstonMartin.jsx';
import Ferrari from './Pages/Brand/Ferrari.jsx';
import Porsche from './Pages/Brand/Porsche.jsx';
import Volvo from './Pages/Brand/Volvo.jsx';

import MahindraThar from './Pages/Mahindra/Mahindra Thar.jsx';
import F296GTB from './Pages/Ferrari/F296GTB.jsx';
import F8Tributo from './Pages/Ferrari/F8Tributo.jsx';
import Carens from './Pages/Kia/Carens.jsx';
import EV6 from './Pages/Kia/EV6.jsx';
import Seltos from './Pages/Kia/Seltos.jsx';
import Sonet from './Pages/Kia/Sonet.jsx';
import DB11 from './Pages/Aston Martin/DB11.jsx';
import DB12 from './Pages/Aston Martin/DB12.jsx';
import Vantage from './Pages/Aston Martin/Vantage.jsx';
import DBX from './Pages/Aston Martin/DBX.jsx';
import FPace from './Pages/Jaguar/FPace.jsx';
import FType from './Pages/Jaguar/Ftype.jsx';
import IPace from './Pages/Jaguar/IPace.jsx';
import CartPage from './Components/CartPage.jsx';
import Cart from './Components/Cart.jsx';
import BoleroNeo from './Pages/Mahindra/BoleroNeo.jsx';
import ScorpioN from './Pages/Mahindra/ScorpioN.jsx';
import XUV300 from './Pages/Mahindra/XUV300.jsx';
import XUV700 from './Pages/Mahindra/XUV700.jsx';
import Harrier from './Pages/Tata/Harrier.jsx';
import Nexon from './Pages/Tata/Nexon.jsx';
import Punch from './Pages/Tata/Punch.jsx';
import Tiago from './Pages/Tata/Tiago.jsx';
import Baleno from './Pages/Maruti Suzuki/BAleno.jsx';
import Dzire from './Pages/Maruti Suzuki/Dzire.jsx';
import Ertiga from './Pages/Maruti Suzuki/Ertiga.jsx';
import Fronx from './Pages/Maruti Suzuki/Fronx.jsx';
import Creta from './Pages/Hyundai/Creta.jsx';
import I20NLine from './Pages/Hyundai/I20NLine.jsx';
import Verna from './Pages/Hyundai/Verna.jsx';
import Wraith from './Pages/RollsRoyce/Wraith.jsx';
import Spectre from './Pages/RollsRoyce/Spectre.jsx';
import Phantom from './Pages/RollsRoyce/Phantom.jsx';
import Dawn from './Pages/RollsRoyce/Dawn.jsx';
import AMGA35 from './Pages/Mercedes/AMGA35.jsx';


export default function App() {
  return (


   <div>
    

    <Navbar/>
    
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/brands' element={<Brands/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/BookingPage' element={<BookingPage/>}/>
     
     <Route path="/cart" element={<Cart/>} />
     

     <Route path='/Tata' element={<Tata/>}/>
     <Route path='/Maruti' element={<Maruti/>}/>
     <Route path='/Toyota' element={<Toyota/>}/>
     <Route path='/BMW' element={<BMW/>}/>
     <Route path='/Mahindra' element={<Mahindra/>}/>
     <Route path='/Audi' element={<Audi/>}/>
     <Route path='/Kia' element={<Kia/>}/>
     <Route path='/Jaguar' element={<Jaguar/>}/>
     <Route path='/Hyundai' element={<Hyundai/>}/>
     <Route path='RollsRoyce/' element={<RollsRoyce/>}/>
     <Route path='/MercedesBenz' element={<MercedesBenz/>}/>
     <Route path='/Lamborghini' element={<Lamborghini/>}/>
     <Route path='/AstonMartin' element={<AstonMartin/>}/>
     <Route path='/Ferrari' element={<Ferrari/>}/>
     <Route path='/Porsche' element={<Porsche/>}/>
     <Route path='/Volvo' element={<Volvo/>}/>


     <Route path='/F296GTB' element={<F296GTB/>}/>
     <Route path='/F8Tributo' element={<F8Tributo/>}/>

     <Route path='/Carens' element={<Carens/>}/>
     <Route path='/EV6' element={<EV6/>}/>
     <Route path='/Seltos' element={<Seltos/>}/>
     <Route path='/Sonet' element={<Sonet/>}/>


     <Route path='/DB11' element={<DB11/>}/>
     <Route path='/DB12' element={<DB12/>}/>
     <Route path='/Vantage' element={<Vantage/>}/>
     <Route path='/DBX' element={<DBX/>}/>


     <Route path='/FPace' element={<FPace/>}/>
     <Route path='/FType' element={<FType/>}/>
     <Route path='/IPAce' element={<IPace/>}/>

     <Route path='/BoleroNeo' element={<BoleroNeo/>}/>
     <Route path='/MahindraThar' element={<MahindraThar/>}/>
     <Route path='/ScorpioN' element={<ScorpioN/>}/>
     <Route path='/XUV300' element={<XUV300/>}/>
     <Route path='/XUV700' element={<XUV700/>}/>
     
     <Route path='/Harrier' element={<Harrier/>}/>
     <Route path='/Nexon' element={<Nexon/>}/>
     <Route path='/Punch' element={<Punch/>}/>
     <Route path='/Tiago' element={<Tiago/>}/>

     <Route path='Baleno' element={<Baleno/>} />
     <Route path='Fronx' element={<Fronx/>} />
     <Route path='Ertiga' element={<Ertiga/>} />
     <Route path='Dzire' element={<Dzire/>} />
     
     <Route path='Creta' element={<Creta/>} />
     <Route path='I20NLine' element={<I20NLine/>} />
     <Route path='Verna' element={<Verna/>} />

     <Route path='Dawn' element={<Dawn/>} />
     <Route path='Phantom' element={<Phantom/>} />
     <Route path='Spectre' element={<Spectre/>} />
     <Route path='Wraith' element={<Wraith/>} />

     <Route path='AMGA35' element={<AMGA35/>} />

     
    </Routes>
   <Footer/>
    
   </div>
  )
}
