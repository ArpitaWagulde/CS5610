import { FaBars, FaGlasses } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses, assignments } from "../../../Kanbas/Database";

function Breadcrumb() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const currLocation = pathname.split("/")[4];
  const assignmentId = pathname.split("/")[5];
  const course = courses.find((course) => course._id === courseId);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  return (
    <>
      <FaBars className="ps-1 pe-2 fs-2" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/Kanbas/Courses/${courseId}/Home`}>
              {course?.number} {course?.name}
            </Link>
          </li>

          {currLocation === "Assignments" ? (
            <>
              <li className="breadcrumb-item" aria-current="page">
                {currLocation}
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {assignment?.title}
              </li>
            </>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              {currLocation === "Home" ? "Modules" : currLocation}
            </li>
          )}
        </ol>
      </nav>
      <button
        style={{ position: "absolute", right: 0 }}
        className="btn btn-light"
      >
        <FaGlasses className="m-1" />
        Student View
      </button>
    </>
  );
}

function MobileBreadcrumb() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const currLocation = pathname.split("/")[4];
  const assignmentId = pathname.split("/")[5];
  const course = courses.find((course) => course._id === courseId);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  return (
    <span style={{ textDecoration: "none", color: "white" }}>
      {course?.number}.{course?.name}
      <br />
      {currLocation === "Assignments" ? (
        <>
          {currLocation}
          <br />
          {assignment?.title}
        </>
      ) : (
        <>{currLocation === "Home" ? "Modules" : currLocation}</>
      )}
    </span>
  );
}

export default Breadcrumb;
export { MobileBreadcrumb };