import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaFilePen, FaPlus } from "react-icons/fa6";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="flex-fill">
      <div
        style={{ justifySelf: "stretch" }}
        className="d-flex wd-asmt-home-buttons justify-content-between m-2"
      >
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Assignment"
        />
        <div style={{ justifyContent: "flex-end" }}>
          <button type="button" className="btn btn-light">
            <FaPlus className="ms-2" /> Group
          </button>
          <button
            type="button"
            className="btn btn-light"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <FaPlus className="ms-2" /> Assignment
          </button>
          <button
            style={{ height: "37px" }}
            type="button"
            className="btn btn-light"
          >
            <FaEllipsisV />
          </button>
          <br />
        </div>
      </div>
      <hr className="ms-2 me-2" />
      <ul className="list-group wd-asmt-list m-2">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <span className="p-1 me-2 badge border border-dark rounded-pill text-secondary">
                40% of Total
              </span>
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="d-flex">
                  <div style={{ alignSelf: "center" }}>
                    <FaEllipsisV className="me-2" />
                    <FaFilePen className="m-2 text-success" />
                  </div>
                  <div className="text-secondary p-1">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small>
                      {assignment.coverage} | Due {assignment.due} |{" "}
                      {assignment.weightage} pts
                    </small>
                  </div>
                  <div className="ms-auto" style={{ alignSelf: "center" }}>
                    <span>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;
