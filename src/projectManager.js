import { createProject } from "./project.js";
import { createTodo} from "./todo.js";


export const controller = (() => {
    let projects = [];
    let currentProjectID;

    const getProjects = () => projects;
    const getCurrentProject = () => projects.find((p) => p.id === currentProjectID);
        
    const addProject = (name) => {
        const newProject = createProject(name);
        projects.push(newProject);
        currentProjectID = newProject.id;
    }

    const addToDoToCurrentProject = (title, description, dueDate, priority) => {
        const currentProject = getCurrentProject();
        if (currentProject) {
            const newToDo = createTodo(title, description, dueDate, priority);
            currentProject.addToDo(newToDo);
        }
    };
    
    addProject("Default"); //add a default project


    return {
        getProjects,
        getCurrentProject,
        addProject,
        addToDoToCurrentProject 
    };

})();

