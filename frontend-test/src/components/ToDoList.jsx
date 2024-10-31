import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const API_URL = "https://backend-test-woad-three.vercel.app//api/todos"; // Adjust with deployed Vercel URL

function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToDo = (newToDo) => {
    axios
      .post(API_URL, newToDo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Error adding todo:", error));
  };

  const updateToDo = (id, updatedToDo) => {
    axios
      .put(`${API_URL}/${id}`, updatedToDo)
      .then(() =>
        setTodos(todos.map((todo) => (todo._id === id ? updatedToDo : todo)))
      )
      .catch((error) => console.error("Error updating todo:", error));
  };

  const deleteToDo = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <div className="todo-list">
      <ToDoForm onAdd={addToDo} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo._id}
            todo={todo}
            onUpdate={updateToDo}
            onDelete={deleteToDo}
          />
        ))}
      </ul>
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  addToDo: PropTypes.func,
  updateToDo: PropTypes.func,
  deleteToDo: PropTypes.func,
};

export default ToDoList;
