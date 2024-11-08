import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Actions/action';
import StateCard from './StateCard';

function Todos() {
    const [todo, setTodo] = useState("");
    const todos = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        if (todo) {
            dispatch(addTodo(todo));
            setTodo("");
        }
    };
    const filterTasksByStatus = (status) => todos.filter((task) => task.status === status);
    return (
        <div className='bg-black'>
            <h1 className='flex justify-center items-center pt-8 text-3xl text-white font-extrabold'>Promise TO-DO</h1>
            <div className='flex justify-center'>
                <form className='mt-10'>
                    <input
                        type="text"
                        className='p-3 w-[900px] mt-5 rounded-3xl mx-5 appearance-none border-orange-500 border-2'
                        placeholder='Enter ToDo here....'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-3xl font-semibold shadow hover:bg-orange-600 transition duration-200'
                        onClick={handleAdd}
                    >
                        Add
                    </button>
                </form>
            </div>
            <div className='mt-10 mx-40 px-10 grid grid-cols-1 pb-20'>
                {/* <StateCard heading="Backlog" TodoData={filterTasksByStatus("backlog")} /> */}
                <StateCard heading="Pending" TodoData={filterTasksByStatus("pending")} />
                <StateCard heading="Todo" TodoData={filterTasksByStatus("todo")} />
                <StateCard heading="Ongoing" TodoData={filterTasksByStatus("in-progress")} />
                <StateCard heading="Done" TodoData={filterTasksByStatus("done")} />
            </div>
        </div>
    );
}

export default Todos;
