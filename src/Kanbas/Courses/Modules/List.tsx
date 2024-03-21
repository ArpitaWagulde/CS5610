import { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlus,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  console.log(moduleList);
  console.log(courseId);
  const modulesList = moduleList.filter((module) => module.course === courseId);
  console.log(modulesList);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

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
      <button
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        className="btn btn-success m-2"
      >
        Add
      </button>
      <button
        onClick={() => dispatch(updateModule(module))}
        className="btn btn-primary m-2"
      >
        Update
      </button>
      <input
        value={module.name}
        onChange={(e) =>
          dispatch(setModule({ ...module, name: e.target.value }))
        }
        className="form-control m-2"
      />
      <textarea
        value={module.description}
        onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))
        }
        className="form-control m-2"
      />
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
                <button
                  onClick={() => dispatch(deleteModule(module?._id))}
                  className="btn btn-danger me-2 p-1"
                  style={{ borderRadius: "0.375rem" }}
                >
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-success me-2 p-1"
                  style={{ borderRadius: "0.375rem" }}
                >
                  Edit
                </button>
                <FaCheckCircle className="text-success" />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule?._id === module?._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any) => (
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
