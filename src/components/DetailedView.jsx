import React from "react";

const DetailedView = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {student.name}
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {student.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> {student.phone}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Address:</strong> {student.address}
        </p>
        
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailedView;
