import deleteIcon from "../images/delete-button.png";
import editIcon from "../images/edit-button.png";

function Todo({ todo, type, idx, handleCheck, handleDelete }) {
  const hasDueDate = todo.dueDate != null;

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="flex flex-row space-x-2 mx-auto border-b border-dashed">
          {todo.complete ? (
            ""
          ) : (
            <input
              type="checkbox"
              id={`complete-${idx}`}
              name="complete"
              onClick={() => handleCheck(todo, type, idx)}
              className=""
            />
          )}
          <p className="">{todo.task}</p>
          {/* where .task and .dueDate is referencing the json data */}

          <p className="font-semibold">Due Date:</p>
          {hasDueDate ? <p>{todo.dueDate}</p> : ""}
        </div>
        <div className="flex mx-auto mt-2">
          {todo.complete ? (
            ""
          ) : (
            <img
              src={editIcon}
              alt=""
              onClick={() => handleDelete(todo, type, idx)}
              className="size-5 w-8 cursor-pointer"
            />
          )}
          <img
            src={deleteIcon}
            alt=""
            onClick={() => handleDelete(todo, type, idx)}
            className="size-5 w-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
