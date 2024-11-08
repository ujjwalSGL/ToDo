import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, moveToPending, moveToInProgress, moveToDone, moveToTodo } from '../Actions/action';

function Card({ data }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(data.task);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    dispatch(updateTodo(data.id, updatedTask));
    setIsEditing(false);
  };

  const handleDelete = () => dispatch(deleteTodo(data.id));

  const handleMoveToPending = () => dispatch(moveToPending(data.id));
  const handleMoveToInProgress = () => dispatch(moveToInProgress(data.id));
  const handleMoveToDone = () => dispatch(moveToDone(data.id));
  const handleMoveToTodo = () => dispatch(moveToTodo(data.id));

  return (
    <div className='h-12 p-6 rounded-md shadow-2xl bg-slate-50 mt-2 flex justify-between items-center'>
      {/* {data.status !== "done" && (
        <button onClick={handleMoveToPending} className="mr-2">⬅️</button>
      )} */}
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className='border p-2 rounded-md'
        />
      ) : (
        <span>{data.task}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="ml-2">💾</button>
        ) : (
          <button onClick={handleEdit} className="ml-2">✏️</button>
        )}
        <button onClick={handleDelete} className="ml-2">🗑️</button>

      </div>
      <div>
        {data.status === "todo" && (
          <>
            <button onClick={handleMoveToInProgress} className="ml-2">➡️</button>
            <button onClick={handleMoveToPending} className="ml-2">⬅️</button>
          </>
        )}
        {data.status === "pending" && (
          <>
            <button onClick={handleMoveToInProgress} className="ml-2">➡️</button>
            <button onClick={handleMoveToTodo} className="ml-2">↩️</button>
          </>
        )}
        {data.status === "in-progress" && (
          <>
            <button onClick={handleMoveToDone} className="ml-2">✔️</button>
            <button onClick={handleMoveToPending} className="ml-2">⬅️</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
