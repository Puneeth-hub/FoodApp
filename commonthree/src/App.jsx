import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./components/TodoList";

import "./index.css";

const App = () => (
  <div className="container">
    <TodoApp/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)