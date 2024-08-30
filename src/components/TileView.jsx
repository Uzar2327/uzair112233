import React from "react";

const TileView = ({ student, onClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-6 hover:border-blue-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{student.name}</h3>
      <p className="text-gray-700 mb-5">{student.email}</p>
      <div className="flex justify-between items-center space-x-3 mb-6">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Edit
        </button>
        <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">
          Delete
        </button>
      </div>
      <button
        onClick={() => onClick(student)}
        className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300 ease-in-out"
      >
        View Details
      </button>
    </div>
  );
};

export default TileView;
