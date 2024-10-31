import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-2xl font-bold text-center my-4">To-Do List</h1>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
