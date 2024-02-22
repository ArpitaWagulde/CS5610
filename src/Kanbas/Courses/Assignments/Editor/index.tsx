import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-asmt-edit-home flex-fill">
      <h3>Assignment Name</h3>
      <input
        className="form-control"
        id="assignment-name"
        value={assignment?.title}
      />
      <br />
      <textarea style={{ height: "10%" }} className="form-control"></textarea>
      <br />
      <div>
        <div className="row">
          <div className="col-3">Points</div>
          <div className="col-9">
            <input className="form-control" value={assignment?.weightage} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">Assignment Group</div>
          <div className="col-9">
            <select className="form-select" id="groups">
              <option selected value="assignments">
                ASSIGNMENTS
              </option>
              <option value="quiz">QUIZ</option>
              <option value="exam">EXAMS</option>
              <option value="project">PROJECT</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Display Grade as</div>
          <div className="col-9">
            <select className="form-select" id="grade">
              <option selected value="percentage">
                Percentage
              </option>
              <option value="percentile">Percentile</option>
              <option value="out-of-100">Out Of 100</option>
              <option value="gpa">GPA</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9" style={{ textAlign: "left" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value="do-not-count"
              name="check-do-not-count"
              id="chkbox-do-not-count"
            />
            <label
              className="form-check-label ps-1"
              htmlFor="chkbox-do-not-count"
            >
              Do not count this assignment towards final grade
            </label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3">Assign</div>
          <div className="col-9 card p-1">
            <div className="card-body" style={{ textAlign: "left" }}>
              <span className="card-title m-2">
                <b>Assign to</b>
              </span>
              <br />
              <input className="m-2 form-control" value="Everyone" />
              <span className="card-title m-2">
                <b>Due</b>
              </span>
              <br />
              <input
                className="m-2 form-control"
                type="date"
                id="due"
                value="2021-01-01"
              />
              <div className="row">
                <div className="col-6">
                  <span className="card-title m-2">
                    <b>Available From</b>
                  </span>
                  <br />
                  <input
                    className="m-2 form-control"
                    type="date"
                    id="from"
                    value="2021-01-01"
                  />
                </div>
                <div className="col-6">
                  <span className="card-title m-2">
                    <b>Until</b>
                  </span>
                  <br />
                  <input
                    className="m-2 form-control"
                    type="date"
                    id="to"
                    value="2021-01-01"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer" style={{ textAlign: "center" }}>
              <i className="fa fa-plus pe-2"></i>Add
            </div>
          </div>
        </div>
        <hr />
        <div className="d-inline">
          <div className="row">
            <div className="col-9" style={{ textAlign: "left" }}>
              <input
                className="form-check-input"
                type="checkbox"
                value="notify-users"
                name="check-notify-users"
                id="chkbox-notify-userst"
              />
              <label
                className="form-check-label ps-1"
                htmlFor="chkbox-notify-users"
              >
                Notify users that this content has changed
              </label>
            </div>
            <div
              className="col-3"
              style={{ float: "right", paddingBottom: "2px" }}
            >
              <button
                onClick={handleSave}
                className="btn btn-success ms-2 float-end"
              >
                Save
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
