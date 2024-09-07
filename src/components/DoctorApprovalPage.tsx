'use client';

import React, { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  department: string;
  specialization: string;
  experience: number; // years of experience
  age: number;
  phoneNumber: string;
  approved: boolean | null; // null for pending, true for approved, false for disapproved
}

const initialDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. John Smith',
    department: 'Cardiology',
    specialization: 'Cardiologist',
    experience: 10,
    age: 45,
    phoneNumber: '123-456-7890',
    approved: null,
  },
  {
    id: 2,
    name: 'Dr. Lisa White',
    department: 'Neurology',
    specialization: 'Neurologist',
    experience: 8,
    age: 40,
    phoneNumber: '987-654-3210',
    approved: null,
  },
  // Add more doctors as needed
];

const DoctorApprovalPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleViewDetails = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleApprove = () => {
    if (selectedDoctor) {
      setDoctors(doctors.map(doc =>
        doc.id === selectedDoctor.id ? { ...doc, approved: true } : doc
      ));
      setShowModal(false);
    }
  };

  const handleDisapprove = () => {
    if (selectedDoctor) {
      setDoctors(doctors.map(doc =>
        doc.id === selectedDoctor.id ? { ...doc, approved: false } : doc
      ));
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">Doctor Approval</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Registered Doctors</h2>
        <ul className="space-y-4">
          {doctors.map(doctor => (
            <li
              key={doctor.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">Department: {doctor.department}</p>
              </div>
              <button
                onClick={() => handleViewDetails(doctor)}
                className="py-1 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
              {doctor.approved === true && (
                <span className="text-green-500 text-xl">✔️</span>
              )}
              {doctor.approved === false && (
                <span className="text-red-500 text-xl">❌</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Doctor Details */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
            <div className="mb-4">
              <p><strong>Name:</strong> {selectedDoctor.name}</p>
              <p><strong>Department:</strong> {selectedDoctor.department}</p>
              <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
              <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
              <p><strong>Age:</strong> {selectedDoctor.age}</p>
              <p><strong>Phone Number:</strong> {selectedDoctor.phoneNumber}</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleApprove}
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Approve
              </button>
              <button
                onClick={handleDisapprove}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Disapprove
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorApprovalPage;
