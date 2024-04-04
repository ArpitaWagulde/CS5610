import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const API_A5 = `${API_BASE}/a5`;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "100",
    name: "NodeJS",
    description: "Create a NodeJS server with ExpressJS",
    course: "CS101",
  });
  const ASSIGNMENT_URL = `${API_A5}/assignment`;
  const MODULE_URL = `${API_A5}/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(ASSIGNMENT_URL);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${API_A5}/assignment`}>
        Get Assignment
      </a>
      &nbsp;
      <a className="btn btn-primary" href={`${API_A5}/module`}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href={`${API_A5}/assignment/title`}>
        Get Title
      </a>
      &nbsp;
      <a className="btn btn-primary" href={`${API_A5}/module/name`}>
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <div>
        <a
          className="btn btn-warning"
          href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          className="form-control"
          type="text"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          value={assignment.title}
        />
        <br />
        <a
          className="btn btn-warning"
          href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          className="form-control"
          type="number"
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })
          }
          value={assignment.score}
        />
        <br />
        <a
          className="btn btn-warning"
          href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        &nbsp;
        <input
          type="checkbox"
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
          value={assignment.score}
        />
      </div>
      &nbsp;
      <div>
        <a
          className="btn btn-warning"
          href={`${MODULE_URL}/name/${module.name}`}
        >
          Update Module Name
        </a>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          value={module.name}
        />
      </div>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      &nbsp;
      <button className="btn btn-warning" onClick={updateTitle}>
        Update Title to: {assignment.title}
      </button>
      <br />
      <button className="btn btn-primary" onClick={fetchAssignment}>
        Fetch Assignment
      </button>
    </div>
  );
}
export default WorkingWithObjects;
