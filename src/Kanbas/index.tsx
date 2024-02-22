import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import "./style.css";
import Courses from "./Courses";
import { Navigate, Route, Routes } from "react-router-dom";

function Kanbas() {
  return (
    <>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Kanbas;
