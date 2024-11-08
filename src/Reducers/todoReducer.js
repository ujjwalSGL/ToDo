const initialState = {
    tasks: [],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTodo":
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload, status: 'todo' }],
            };
        case "updateTodo":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, task: action.payload.task } : task
                ),
            };
        case "deleteTodo":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case "done":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, status: 'done' } : task
                ),
            };
        case "progress":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, status: 'in-progress' } : task
                ),
            };
        case "pending":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, status: 'pending' } : task
                ),
            };
        case "todo":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, status: 'todo' } : task
                ),
            };
        default:
            return state;
    }
};

export default TodoReducer;
