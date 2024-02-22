import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaPlus,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div
        style={{ justifyContent: "flex-end" }}
        className="d-flex wd-home-buttons m-2"
      >
        <button type="button" className="btn btn-light">
          Collapse All
        </button>
        <button type="button" className="btn btn-light">
          View Progress
        </button>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaRegCheckCircle className="text-success" /> Publish All
        </button>
        <ul className="dropdown-menu">
          {modulesList.map((module, index) => (
            <li>
              <a className="dropdown-item" href="#">
                Publish {module.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="btn btn-light"
          style={{ backgroundColor: "red", color: "white" }}
        >
          <FaPlus /> Module
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
      <hr className="m-2" />
      <br />
      <ul className="list-group wd-modules m-2">
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
