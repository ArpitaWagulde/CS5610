import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation, { CourseMobileNavigation } from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import Home from "./Home";
import Breadcrumb from "./Breadcrumb";
import { FaBars, FaGlasses, FaX } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { KanbasMobileNavigation } from "../Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const currLocation = pathname.split("/")[4];
  const course = courses.find((course) => course._id === courseId);
  const BreadcrumbLinks = [
    {
      label: `${course?.number} ${course?.name}`,
      link: `/Kanbas/Courses/${courseId}/Home`,
    },
    {
      label: { currLocation },
      link: `/Kanbas/Courses/${courseId}/Home/${currLocation}`,
    },
  ];
  return (
    <>
      <div
        id="wd-top-course-nav"
        className="offcanvas offcanvas-top"
        aria-labelledby="wd-top-course-nav"
      >
        <div className="d-flex d-block d-md-none wd-top-nav-bar bg-black">
          <div className="col-3">
            <button
              type="button"
              style={{ border: "none", background: "none" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#wd-top-kanbas-nav"
              aria-controls="wd-top-kanbas-nav"
            >
              <FaBars
                style={{ padding: "20px", fontSize: "1.2em", color: "white" }}
              />
            </button>
          </div>
          <div className="col-6" style={{ textAlign: "center" }}>
            <span style={{ textDecoration: "none", color: "white" }}>
              {course?.number}.{course?.name}
              <br />
              {currLocation.includes("Home") ? "Modules" : currLocation}
            </span>
          </div>
          <div className="col-3">
            <span
              style={{
                position: "absolute",
                right: "0",
                fontSize: "1.2em",
                color: "white",
              }}
            >
              <FaGlasses style={{ margin: "10px" }} />
              <button
                data-bs-dismiss="offcanvas"
                style={{ float: "right", border: "none", background: "none" }}
              >
                <FaX
                  style={{ color: "white", margin: "10px", fontSize: "1.2em" }}
                />
              </button>
            </span>
          </div>
        </div>
        <CourseMobileNavigation />
      </div>
      <div
        id="wd-top-kanbas-nav"
        className="offcanvas offcanvas-start"
        aria-labelledby="wd-top-kanbas-nav"
      >
        <KanbasMobileNavigation />
      </div>
      <div className="d-flex d-block d-md-none wd-top-nav-bar bg-black">
        <div className="col-3">
          <button
            type="button"
            style={{ border: "none", background: "none" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#wd-top-kanbas-nav"
            aria-controls="wd-top-kanbas-nav"
          >
            <FaBars
              style={{ margin: "20px", fontSize: "1.2em", color: "white" }}
            />
          </button>
        </div>
        <div className="col-6" style={{ textAlign: "center" }}>
          <span style={{ textDecoration: "none", color: "white" }}>
            {course?.number}.{course?.name}
            <br />
            {currLocation.includes("Home") ? "Modules" : currLocation}
          </span>
        </div>
        <div className="col-3">
          <span
            style={{
              position: "absolute",
              right: "0",
              fontSize: "1.2em",
              color: "white",
              marginTop: "10px",
            }}
          >
            <FaGlasses style={{ margin: "10px" }} />
            <button
              type="button"
              style={{ border: "none", background: "none" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#wd-top-course-nav"
              aria-controls="wd-top-course-nav"
            >
              <FaChevronDown
                style={{
                  color: "white",
                  margin: "10px",
                }}
              />
            </button>
          </span>
        </div>
      </div>
      <div className="wd-course-content">
        <div className="d-none d-md-inline-flex wd-top-breadcrumb">
          <Breadcrumb
            courseId={course?._id}
            courseNumber={course?.number}
            courseName={course?.name}
            currNav={currLocation}
          />
        </div>
        <div className="d-none d-md-block wd-hr-breadcrumb">
          <hr />
        </div>
        <div className="d-flex flex-fill wd-content-fill">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </>
        </div>
      </div>
    </>
  );
}
export default Courses;
