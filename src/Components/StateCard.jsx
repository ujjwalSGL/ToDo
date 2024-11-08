import React from 'react';
import Card from './Card';

function StateCard({ heading, TodoData = [] }) {
    return (
        <div className=''>
            <h1 className="bg-orange-400 text-white text-lg flex justify-center items-center h-12 rounded-t-xl mt-10">{heading}</h1>
            <div className=" bg-gray-50  border  rounded-b-xl">
                <div className='flex flex-col justify-center items-center '>
                    {TodoData.length > 0 ? (
                        TodoData.map((todo) => (
                            <Card key={todo.id} data={todo} />
                        ))
                    ) : (
                        <p className="text-center pb-3 text-gray-500 mt-4">No tasks available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StateCard;
