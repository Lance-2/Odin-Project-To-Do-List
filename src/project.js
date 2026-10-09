export const createProject = (name) => {
    const id = crypto.randomUUID();
    const toDos = [];

    const addToDo = (toDo) => {
        toDos.push(toDo);
    };

    const removeToDo = (toDoId) => {
        const index = toDos.findIndex(toDo => toDo.id === toDoId);
        if (index !== -1) {
            toDos.splice(index, 1);
        }
    }

    return {
        id,
        name,
        toDos,
        addToDo,        
        removeToDo
    };
};
