import Appointments from "@/components/Appointments";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
      <div className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent'>
          <Header/>
          <div id="hero-container"
               className="max-w-4xl mx-auto px-6 sm:pb-16 pb-28 pt-4 flex flex-col sm:items-center sm:pt-8 ">
              <div id="version-text" className="group flex my-3 gap-2 text-sm w-fit items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1
                    shadow-md hover:shadow-sm hover:-translate-y-1 transition duration-500 shadow-yellow-50 hover:shadow-yellow-200 hover:border-yellow-400
                ">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full border-yellow-600 border"></div>
                  <p className="font-body font-semibold text-yellow-600">24/7 <span className="text-amber-800">Patient's First</span>
                  </p>
                  <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
              </div>

              <div className="hidden sm:flex flex-row gap-8 my-3" id="hero-features">
                  <div className="flex justify-center gap-2 items-center text-gray-500 text-md">
                      <i className="fa-regular fa-file-code"></i>
                      <p>Medical Record Management</p>
                  </div>
                  <div className="flex justify-center gap-2 items-center text-gray-500 text-md">
                      <i className="fa-regular fa-file-code"></i>
                      <p>Seamless Payment</p>
                  </div>
                  <div className="flex justify-center gap-2 items-center text-gray-500 text-md">
                      <i className="fa-regular fa-file-code"></i>
                      <p>Dashboard</p>
                  </div>
              </div>

              <h1 className="font-semibold font-body text-4xl mt-1 leading-snug sm:text-7xl max-w-2xl sm:text-center ">Patient Management System</h1>
              <p className="mt-6 sm:mt-8 text-md font-normal text-gray-600 sm:text-center sm:text-2xl  max-w-2xl">Streamline the management of patient information, appointments, and medical
              records  for healthcare providers.</p>

              <div className="flex flex-col sm:flex-row mt-8 gap-y-3 gap-x-4 sm:justify-center" id="buttons-container">
                  <a href='/patient/patientLogin'
                      className="rounded-lg bg-primary text-md py-3 px-8 font-semibold hover:opacity-90 text-white">Patient
                  </a>
                  <a href='/doctor/doctorLogin'
                      className="rounded-lg bg-white border border-gray-300 text-md py-3 px-8 font-semibold hover:border-gray-400">Doctor
                  </a>
              </div>

          </div>
      </div>
  );
}
