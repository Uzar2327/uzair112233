import React from "react";

const GridView = ({ students }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-500"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            <span className="text-indigo-600">Name:</span> {student.name}
          </h3>
          <p className="text-lg text-gray-700">
            <span className="text-indigo-600">Email:</span> {student.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GridView;
