import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import DetailedView from "./components/DetailedView";


const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <HorizontalMenu />
        <div className="p-4">
          <HamburgerMenu />
          <h1 className="text-2xl font-bold my-4">Students Dashboard</h1>
          <nav className="mb-4">
            <Link
              to="/grid-view"
              className="mr-4 text-white bg-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Grid View
            </Link>
            <Link
              to="/tile-view"
              className="text-white bg-green-600 font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Tile View
            </Link>
          </nav>
          <Routes>
            <Route
              path="/grid-view"
              element={<GridView students={students} />}
            />
            <Route
              path="/tile-view"
              element={
                <div className="grid grid-cols-3 gap-4">
                  {students.map((student) => (
                    <TileView
                      key={student.id}
                      student={student}
                      onClick={setSelectedStudent}
                    />
                  ))}
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div className="text-center">
                  <p className="text-xl">Please select a view</p>
                </div>
              }
            />
          </Routes>
          {selectedStudent && (
            <DetailedView
              student={selectedStudent}
              onClose={() => setSelectedStudent(null)}
            />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
