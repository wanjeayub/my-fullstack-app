import PropTypes from "prop-types";

function ToDoItem({ todo, onUpdate, onDelete }) {
  const handleToggle = () => {
    onUpdate(todo._id, { ...todo, completed: !todo.completed });
  };

  return (
    <li className="flex justify-between items-center my-2">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <div>
        <button onClick={handleToggle} className="mx-2">
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(todo._id)} className="text-red-600">
          Delete
        </button>
      </div>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoItem;
