'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';

// Define the types for department and doctor data
interface Department {
  name: string;
  daysOpen: string[];
}

interface Doctor {
  name: string;
  availableTimes: string[]; // [startTime, endTime]
}

// Sample data for departments and doctors
const departmentsData: Department[] = [
  { name: 'Cardiology', daysOpen: ['Monday', 'Wednesday', 'Friday'] },
  { name: 'Neurology', daysOpen: ['Tuesday', 'Thursday'] },
  { name: 'Dermatology', daysOpen: ['Monday', 'Thursday'] },
];

const doctorsData: { [key: string]: Doctor[] } = {
  Cardiology: [
    { name: 'Dr. John Smith', availableTimes: ['10:00 AM', '2:00 PM'] },
    { name: 'Dr. Lisa White', availableTimes: ['9:00 AM', '1:00 PM'] },
  ],
  Neurology: [
    { name: 'Dr. Robert Brown', availableTimes: ['11:00 AM', '3:00 PM'] },
  ],
  Dermatology: [
    { name: 'Dr. Emily Green', availableTimes: ['12:00 PM', '4:00 PM'] },
  ],
};

// Helper function to convert 12-hour time format to 24-hour time
const convertTo24Hour = (time: string) => {
  const [hoursMinutes, period] = time.split(' ');
  let [hours, minutes] = hoursMinutes.split(':').map(Number);
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0; // midnight case
  }
  return { hours, minutes };
};

// Helper function to create time intervals between start and end times
const createTimeIntervals = (startTime: string, endTime: string) => {
  const times: string[] = [];
  const start = convertTo24Hour(startTime);
  const end = convertTo24Hour(endTime);

  const startDate = new Date(1970, 0, 1, start.hours, start.minutes);
  const endDate = new Date(1970, 0, 1, end.hours, end.minutes);

  while (startDate <= endDate) {
    const hours = startDate.getHours().toString().padStart(2, '0');
    const minutes = startDate.getMinutes().toString().padStart(2, '0');
    times.push(`${hours}:${minutes}`);
    startDate.setMinutes(startDate.getMinutes() + 15); // 15-minute intervals
  }

  return times;
};

const Appointments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(event.target.value);
    setSelectedDoctor(null); // reset doctor selection when department changes
    setSelectedTime(null); // reset time selection
  };

  const handleAppointmentRequest = () => {
    if (selectedDoctor && selectedTime) {
      alert(`Appointment request sent to ${selectedDoctor.name} at ${selectedTime}`);
    } else {
      alert('Please select a doctor and a time slot.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-[#01224f]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Book an Appointment</h1>

        {/* Department Selection */}
        <div className="mb-5">
          <label className="block text-lg font-medium mb-2">Select Department</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="" disabled>Select a department</option>
            {departmentsData.map((dept, index) => (
              <option key={index} value={dept.name}>
                {dept.name} (Open: {dept.daysOpen.join(', ')})
              </option>
            ))}
          </select>
        </div>

        {/* Doctor List */}
        {selectedDepartment && (
          <div>
            <h2 className="text-xl font-bold mb-4">Doctors in {selectedDepartment}</h2>
            {doctorsData[selectedDepartment].map((doctor, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg"
              >
                <div>
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-sm">Available Times: {doctor.availableTimes.join(' - ')}</p>
                </div>
                <button
  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
  title="Add New"
  onClick={() => setSelectedDoctor(doctor)}
>
  <svg
    className="stroke-[#0094d4] fill-none group-hover:fill-[#00529a] group-active:stroke-[#98daf8] group-active:fill-[#0094d4] group-active:duration-0 duration-300"
    viewBox="0 0 24 24"
    height="50px"
    width="50px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-width="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path stroke-width="1.5" d="M8 12H16"></path>
    <path stroke-width="1.5" d="M12 16V8"></path>
  </svg>
</button>
              </div>
            ))}
          </div>
        )}

        {/* Time Selection */}
        {selectedDoctor && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Select Time with {selectedDoctor.name}</h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={selectedTime || ''}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="" disabled>Select a time</option>
              {createTimeIntervals(
                selectedDoctor.availableTimes[0],
                selectedDoctor.availableTimes[1]
              ).map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Confirmation Button */}
        {selectedDoctor && selectedTime && (
          /* From Uiverse.io by Masoodaykhan */ 
<button
  className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 mt-6 overflow-hidden border-2 rounded-full group"
  type="submit"
>
  Request Appointment
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 19"
    className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
  >
    <path
      className="fill-gray-800 group-hover:fill-gray-800"
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
    ></path>
  </svg>
</button>

        )}
      </div>
    </div>
  );
};

export default Appointments;
