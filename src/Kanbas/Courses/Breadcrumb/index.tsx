import { FaBars, FaGlasses } from "react-icons/fa";
import { Link } from "react-router-dom";
function Breadcrumb({
  courseId,
  courseNumber,
  courseName,
  currNav,
}: {
  courseId: string | undefined;
  courseNumber: string | undefined;
  courseName: string | undefined;
  currNav: string;
}) {
  return (
    <>
      <FaBars className="ps-1 pe-2 fs-2" />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/Kanbas/Courses/${courseId}/Home`}>
              {courseNumber} {courseName}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currNav.includes("Home") ? "Modules" : currNav}
          </li>
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

export default Breadcrumb;
