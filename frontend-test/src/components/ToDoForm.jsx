import { useState } from "react";
import PropTypes from "prop-types";

function ToDoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new to-do"
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
}

ToDoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ToDoForm;
