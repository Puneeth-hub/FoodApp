import React, {lazy} from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";  
import Footers from "./components/Footer"; 
import FoodLists from './components/FoodList';

const ToDoAppItem = lazy(()=> import("ToDoAppHost/ToDoApp"))



import "./index.css"; 



const App = () => { 
  
  return(
    <div className="container">
    <Header/> 
      <div>
        <FoodLists/>
      </div> 
      <div className="todo-list-container">
        <ToDoAppItem/>
      </div>
    <Footers/>
    </div>
  )
  
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)