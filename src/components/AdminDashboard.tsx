import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col text-black">

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Departments */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Departments</h2>
            <p className="text-gray-600 z-10 relative">Manage departments, add or remove departments.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right z-0"></span>
          </div>

          {/* Doctor Approval */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Doctor Approval</h2>
            <p className="text-gray-600 z-10 relative">Review and approve doctor applications.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right z-0"></span>
          </div>

          {/* Patient Records */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Patient Records</h2>
            <p className="text-gray-600 z-10 relative">View and manage patient records.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right z-0"></span>
          </div>

          {/* Doctor Records */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Doctor Records</h2>
            <p className="text-gray-600 z-10 relative">Access and manage doctor records.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right z-0"></span>
          </div>

          {/* Appointments */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Appointments</h2>
            <p className="text-gray-600 z-10 relative">Schedule and review appointments.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right z-0"></span>
          </div>

          {/* Bills */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group hover:text-[#f0f5f7]">
            <h2 className="text-xl font-semibold mb-4 z-10 relative">Bills</h2>
            <p className="text-gray-600 z-10 relative">Manage and view billing information.</p>
            <span className="absolute inset-0 bg-sky-200 transform scale-x-0 group-hover:scale-x-150 transition-transform duration-500 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-150 transition-transform duration-700 origin-right z-0"></span>
            <span className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-150 transition-transform duration-1000 origin-right z-0"></span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
