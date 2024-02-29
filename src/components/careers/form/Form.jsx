import React,{ useState } from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Form = () => {
    const [FName, setFname] = useState("");
    const [MName, setMname] = useState("");
    const [LName, setLname] = useState("");
    const [Month, setMonth] = useState("");
    const [Day, setDay] = useState("");
    const [Year, setYear] = useState("");
    const [Address, setAddress] = useState("");
    const [sAddress, setSAddress] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [postal, setpostal] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [LinkedIn, setLinkedIn] = useState("");
    const [Positionapplied, setPositionapplied] = useState("");
    const [StartDate, settripstart] = useState("");
    const [coverletter, setcoverletter] = useState("");
    const [aboutus, setAboutus] = useState("");
  
    const handle = (e) => {
      e.preventDefault();
      var Alldata = JSON.parse(localStorage.getItem("Alldata") || "[]");
      var data = {
        FName,
        MName,
        LName,
        Month,
        Day,
        Year,
        Address,
        sAddress,
        City,
        State,
        postal,
        email,
        phoneNo,
        LinkedIn,
        Positionapplied,
        StartDate,
        coverletter,
        aboutus,
      };
      Alldata.push(data);
      localStorage.setItem("Alldata", JSON.stringify(Alldata));
      setFname("");
      setMname("");
      setLname("");
      setMonth("");
      setDay("");
      setYear("");
      setAddress("");
      setSAddress("");
      setCity("");
      setState("");
      setpostal("");
      setEmail("");
      setPhoneNo("");
      setLinkedIn("");
      setpostal("");
      setPositionapplied("");
      settripstart("");
      setAboutus("");
    };
  
  return (
    <>
 <Navbarupp />
 <div>
    <img
    src='https://www.twilio.com/content/dam/twilio-com/global/en/company/culture/come-build-with-us-at-twilio.png'
    className=" object-cover w-full h-[550px]"
    style={{ filter: "brightness(70%)" }}
    alt="Background Image"
    />
 </div>
    <div className="   px-4 md:px-6 bg-[#A92131] pt-20">
 
      <form className="space-y-4 sm:space-y-6 text-white pt-8">
      <div className='flex justify-center items-center flex-col gap-4'>
      <h1 className="text-xl md:text-6xl font-bold">Job Application</h1>
        <h4 className="text-sm sm:text-lg">
          {" "}
          Please complete the form below to apply for a position with us.
        </h4>
      </div>
        <hr></hr>
        <label
          htmlFor="Full-name"
          className="block text-sm font-medium leading-6 text-white"
          
        >
          Full name
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
          <div className="sm:col-span-3">
          <label
              htmlFor="FName"
              className="block text-sm font-medium leading-6 text-white "
            >
              First name
            </label>
            <div className="w-60">
              <input
                type="FName"
                name="FName"
                onChange={(e) => setFname(e.target.value)}
                placeholder='   First name'
                value={FName}
                className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
              />
            </div>
           
          </div>

          <div className="sm:col-span-3">
          <label
              htmlFor="Middle-name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Middle name
            </label>
            <div className="w-60">
              <input
                type="MName"
                name="MName"
                placeholder='  Middle name'
                onChange={(e) => setMname(e.target.value)}
                value={MName}
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              />
            </div>
        
          </div>
          <div className="sm:col-span-3">
          <label
              htmlFor="Last-name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Last name
            </label>
            <div className="w-60">
              <input
                type="LName"
                name="LName"
                placeholder='   Last name'
                onChange={(e) => setLname(e.target.value)}
                value={LName}
                className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              />
            </div>
           
          </div>
        </div>
        <label
          htmlFor="Full-name"
          className="block text-sm font-medium leading-6 text-white"
        >
          Birth Date
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4    ">
          <div className="sm:col-span-3">
          <label
              htmlFor="Month"
              className="block text-sm font-medium leading-6 text-white "
            >
              Month
            </label>
            <div className="w-60">
              <select
                id="Month"
                name="Month"
                autoComplete="Month"
                onChange={(e) => setMonth(e.target.value)}
                value={Month}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  hover:ring-blue-400"
              >
                <option>Please select a month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>

                <option>December</option>
              </select>
            </div>
           
          </div>

          <div className="sm:col-span-3">
          <label
              htmlFor="Day"
              className="block text-sm font-medium leading-6 text-white"
            >
              Day
            </label>
            <div className="w-60">
              <select
                name="Day"
                id="Day"
                onChange={(e) => setDay(e.target.value)}
                value={Day}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              >
                <option>Please select a Day</option>
                <option>0</option>
                <option>1</option>

                <option>2</option>

                <option>3</option>

                <option>4</option>

                <option>5</option>

                <option>6</option>

                <option>7</option>
                <option>8</option>

                <option>9</option>

                <option>10</option>

                <option>11</option>

                <option>12</option>
                <option>13</option>

                <option>14</option>

                <option>15</option>

                <option>16</option>

                <option>17</option>

                <option>18</option>

                <option>19</option>

                <option>20</option>

                <option>21</option>

                <option>22</option>

                <option>23</option>

                <option>24</option>

                <option>25</option>

                <option>26</option>
                <option>27</option>

                <option>28</option>

                <option>29</option>

                <option>30</option>

                <option>31</option>
              </select>
            </div>
          
          </div>
          <div className="sm:col-span-3">
          <label
              htmlFor="Year"
              className="block text-sm font-medium leading-6 text-white"
            >
              Year
            </label>
            <div className="w-60">
            <select
                type="Year"
                name="Year"
                id="Year"
                onChange={(e) => setYear(e.target.value)}
                value={Year}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400">
                  <option>please select</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
       
          </div>
        </div>
        <label
          htmlFor="Address"
          className="block text-sm font-medium leading-6 text-white"
        >
          Current Address
        </label>
        <div className="sm:col-span-3">
        <label
            htmlFor="street-address"
            className="block text-sm font-medium leading-6 text-white "
          >
            street Address
          </label>
          <div className=" max-w-screen-sm">
            <input
              type="Address"
              name="Address"
              id="Address"
              placeholder=' Current Address'
              onChange={(e) => setAddress(e.target.value)}
              value={Address}
              className=" block  w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            />
          </div>
        
        </div>
        <div className="sm:col-span-3">
        <label
            htmlFor="SAddress"
            className="block text-sm font-medium leading-6 text-white"
          >
            street Address Line 2
          </label>
          <div className="max-w-screen-sm">
            <input
              type="SAddress"
              name="SAddress"
              id="SAddress"
              placeholder='  street Address'
              onChange={(e) => setSAddress(e.target.value)}
              value={sAddress}
              className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            />
          </div>
       
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4 ">
          <div className="sm:col-span-3">
          <label
              htmlFor="City"
              className="block text-sm font-medium leading-6 text-white "
            >
              City
            </label>
            <div className="w-60">
              <input
                type="City"
                name="City"
                id="City"
                placeholder='  City'
                onChange={(e) => setCity(e.target.value)}
                value={City}
                className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
              />
            </div>
        
          </div>

          <div className="sm:col-span-3">
          <label
              htmlFor="Middle-name"
              className="block text-sm font-medium leading-6 text-white"
            >
              State
            </label>
            <div className="w-60">
              <input
                type="State"
                name="State"
                id="State"
                placeholder='  State'
                onChange={(e) => setState(e.target.value)}
                value={State}
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              />
            </div>
           
          </div>
        </div>
        <div className="sm:col-span-3">
        <label
            htmlFor="postal"
            className="block text-sm font-medium leading-6 text-white"
          >
            postal/zip code
          </label>
          <div className="max-w-screen-sm">
            <input
              type="postal"
              name="postal"
              id="postal"
              placeholder="  postal/zip code"
              onChange={(e) => setpostal(e.target.value)}
              value={postal}
              autoComplete="postal"
              className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            />
          </div>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
          <div className="sm:col-span-3">
            <div className="w-60">
              <label
                htmlFor="Email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="email"
                placeholder=" ex:myname@gmail.com"
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400 "
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="w-60">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-white"
              >
                Phone Number
              </label>
              <div>
                <input
                  type="tel"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="(000) 000-0000"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="w-60">
            <label
              htmlFor="LinkedIn"
              className="block text-sm font-medium leading-6 text-white"
            >
              LinkedIn
            </label>
            <input
              type="LinkedIn"
              name="LinkedIn"
              placeholder=' LinkedIn Profile'
              id="LinkedIn"
              onChange={(e) => setLinkedIn(e.target.value)}
              value={LinkedIn}
              className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
            />
          </div>
        </div>
        <hr className=" pl-8 "></hr>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
          <div className="sm:col-span-3">
            <div className="w-60">
              <label
                htmlFor="Positionapplied"
                className="block text-sm font-medium leading-6 text-white "
              >
                Position Applied
              </label>
              <select
                type="Positionapplied"
                name="Positionapplied"
                placeholder="  Position Applied"
                id="Positionapplied"
                onChange={(e) => setPositionapplied(e.target.value)}
                value={Positionapplied}
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400">
                  <option>please select</option>
                <option>FrontEnd</option>
                <option>BackEnd</option>
                <option>other</option>

              </select>
            </div>
          </div>
          <div className="w-60">
            <label
              htmlFor="about-us"
              className="block text-sm font-medium leading-6 text-white"
            >
              How did you hear about us
            </label>
            <select
              name="aboutus"
              id="aboutus"
              onChange={(e) => setAboutus(e.target.value)}
              value={aboutus}
              placeholder="   How did you hear about us"
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400">
              <option>please select</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>YouTube</option>
            <option>Facebook</option>
            <option>other</option>

             
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="Available-Start-Date"
            className="block text-sm font-medium leading-6 text-white  "
          >
            Available Start Date
          </label>
          <div className="w-60">
            <input
              type="date"
              id="StartDate"
              name="StartDate"
              placeholder='Start Date'
              onChange={(e) => settripstart(e.target.value)}
              value={StartDate}
              min={new Date().toISOString().split("T")[0]} // Set min date to current date
              max={new Date().getFullYear() + 10 + "-12-31"} // Set max date to 5 years from current year
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
            />
          </div>
        </div>
        {/* Resume */}
        <div className="sm:col-span-3">
          <div className="w-60">
            <label
              htmlFor="LinkedIn"
              className="block text-sm font-medium leading-6 text-white"
            >
             Resume
            </label>
            <input
              type="file"
              name="Resume"
              placeholder=''
              id="Resume"
         
              className=" block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className="max-w-screen-sm">
            <label
              htmlFor="coverletter"
              className="block text-sm font-medium leading-6 text-white"
            >
              cover Letter
            </label>
            <textarea
              name="coverletter"
              id="coverletter"
              placeholder='write something... (optional)'
              autoComplete="coverletter"
              onChange={(e) => setcoverletter(e.target.value)}
              value={coverletter}
              className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            ></textarea>
          </div>
        </div>

        <div className="pl-4 sm:pl-0  sm:pt-4 flex justify-center items-center pb-8">
          <button
            className="rounded bg-black px-4 sm:px-9 py-2 text-white items-center"
            onClick={handle}
          >
            Apply
          </button>
        </div>
      </form>
    </div>

    <Approch />
    <Footer />
    
    </>
  )
}

export default Form