import "./styles.css";
import { controller } from "./projectManager.js";


alert(controller.getCurrentProject());
controller.addToDoToCurrentProject("Test", "A test todo", "2026-10-15", "High");
console.log(controller.getCurrentProject());