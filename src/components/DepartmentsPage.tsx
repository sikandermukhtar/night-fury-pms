'use client';

import React, { useState } from 'react';

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const DepartmentsPage = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [departments, setDepartments] = useState<{ name: string; daysOpen: string[] }[]>([]);

  const handleDayChange = (day: string) => {
    setSelectedDays(prevDays =>
      prevDays.includes(day) ? prevDays.filter(d => d !== day) : [...prevDays, day]
    );
  };

  const handleAddDepartment = () => {
    if (departmentName.trim() && selectedDays.length > 0) {
      setDepartments([...departments, { name: departmentName.trim(), daysOpen: selectedDays }]);
      setDepartmentName('');
      setSelectedDays([]);
    }
  };

  const handleRemoveDepartment = (name: string) => {
    setDepartments(departments.filter(dept => dept.name !== name));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Departments</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Department</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="departmentName">Department Name</label>
          <input
            id="departmentName"
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter department name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Days Open</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {daysOfWeek.map(day => (
              <label key={day} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() => handleDayChange(day)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">{day}</span>
              </label>
            ))}
          </div>
        </div>
<button
  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-105 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4 w-full overflow-hidden"
  onClick={handleAddDepartment}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    className="w-8 h-8 mr-4 -ml-2 text-white animate-pulse"
  >
    <path
      d="M12 4v16m8-8H4"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
  Add Department
</button>

      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Departments List</h2>
        {departments.length === 0 ? (
          <p className="text-gray-600">No departments available.</p>
        ) : (
          <ul className="space-y-4">
            {departments.map((dept, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <p className="text-gray-600">Open: {dept.daysOpen.join(', ')}</p>
                </div>
                <button
                  onClick={() => handleRemoveDepartment(dept.name)}
                  className="ml-4 py-1 px-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DepartmentsPage;

