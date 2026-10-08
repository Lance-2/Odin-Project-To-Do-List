export const createProject = (name) => {
    const id = crypto.randomUUID();
    const toDos = [];

    const addToDo = (toDo) => {
        toDos.push(toDo);
    };

    const removeToDo = (toDoId) => {
        const index = this.toDos.findIndex(toDo => toDo.id === toDoId);
        if (index !== -1) {
            this.toDos.splice(index, 1);
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
