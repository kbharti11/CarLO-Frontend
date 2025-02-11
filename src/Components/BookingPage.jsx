import React, { useState } from 'react';
import './Home.css';


export default function Booking() {
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [dob, setDob] = useState()
    const [address, setAddress] = useState()
    const [pin, setPin] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [pickupDate, setPickupDate] = useState()
    const [pNo, setNo] = useState()
    const [email, setEmail] = useState()

    function handleBooking(e) {
        e.preventDefault();
        const body = {
            name,lastName,address,pin,city,state,pNo,email
        }
        fetch("http://localhost:5000/bookNow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => {
            if (response.status === 201) {
                return response.json()
            } else {
                alert("Response was not successful")
                return response.json()
                 }
        }).then(json => alert(json.message))
            .catch(error => alert(error))


    }

    return (
    
        
        <div>
            
            <div className=" bp-1 min-h-screen flex justify-right items-center bg-gray-100 mt-15  "> 
            <form onSubmit={handleBooking} className="bg-orange-300 bg-opacity-50 shadow-md rounded-lg px-20 pt-10 pb-8 mb-4 transition-transform duration-300 hover:scale-105 m-5">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-4">Car Booking</h1>
                  
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text- text-sm font-bold mb-2 ">First Name</label>
                        <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline  " placeholder="First Name" value={name} 
                         onChange={(e) =>
                            setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-black text-sm font-bold mb-2">Last Name</label>
                        <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-black text-sm font-bold mb-2">Date of Birth</label>
                        <input type="date" id="dob" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-black text-sm font-bold mb-2">Email Address</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-black text-sm font-bold mb-2">Address</label>
                        <input type="text" id="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="pin" className="block text-black text-sm font-bold mb-2">PIN Code</label>
                        <input type="text" id="pin" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="PIN Code" value={pin} onChange={(e) => setPin(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-black text-sm font-bold mb-2">City</label>
                        <input type="text" id="city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="state" className="block text-black text-sm font-bold mb-2">State</label>
                        <input type="text" id="state" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="pickupDate" className="block text-black text-sm font-bold mb-2">Pickup Date</label>
                        <input type="date" id="pickupDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="modelNo" className="block text-black text-sm font-bold mb-2">Phone Number</label>
                        <input type="text" id="modelNo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Phone Number" value={pNo} onChange={(e) => setNo(e.target.value)} />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleBooking}>Book Now</button>
                </div>
            </form>
            
        </div>
        </div>
    )
}
