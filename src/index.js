import "./styles.css";
import { controller } from "./projectManager.js";


controller.addToDoToCurrentProject("Test", "A test todo", "2026-10-15", "High");
console.log(controller.getCurrentProject());
controller.removeToDoFromCurrentProject(controller.getCurrentProject().toDos[0].id);
console.log(controller.getCurrentProject());