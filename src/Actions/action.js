export const addTodo = (tasks) => ({
    type: "addTodo",
    payload: { id: Date.now(), task: tasks },
});

export const updateTodo = (id, updatedTask) => ({
    type: "updateTodo",
    payload: { id, task: updatedTask },
});

export const deleteTodo = (id) => ({
    type: "deleteTodo",
    payload: id,
});

export const moveToCancel = (id) => {
    return {
        type: "done",
        payload: id,
    };
};

export const moveToInProgress = (id) => {
    return {
        type: "progress",
        payload: id,
    };
};

export const moveToPending = (id) => {
    return {
        type: "pending",
        payload: id,
    };
};

export const moveToTodo = (id) => {
    return {
        type: "todo",
        payload: id,
    };
};

export const moveToDone = (id) => ({
    type: "done",
    payload: id,
});
