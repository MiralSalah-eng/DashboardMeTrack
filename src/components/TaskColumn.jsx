import React from 'react';
import DragArea from './DragArea';
import { HiUserCircle } from 'react-icons/hi';

const TaskColumn = ({ title, tasks, icon, color,onDragStart, onDragEnd, onDrop, colIndex }) => {
  return (
    <div className='flex flex-col space-y-1 w-full'>
      <h1 className='text-lg font-semibold flex items-center gap-2' style={{color:color}}>
      <span className='text-xl' >{icon()}</span>        
        {title}</h1>
      <DragArea onDrop={(position) => onDrop(title, 0)} colIndex={colIndex} />
      {tasks.map((item, index) => (
       <div  key={item.id} className='space-y-2 w-full' >
         <div
        className='p-4 rounded-md bg-white min-h-24 cursor-grab active:border-2
             active:border-[#626bf7]  active:opacity-70 space-y-4'
            draggable
            onDragStart={() => { onDragStart(item.id); }}
            onDragEnd={onDragEnd}
        >
          <h6 className='font-semibold text-base'>
            {item.Task}
          </h6>
          <p className='text-sm text-slate-600 flex items-center gap-1'> <span className='text-xl'><HiUserCircle/></span> Assigned to: {item.Assigned}</p>
          <p className='py-1 px-3 font-semibold bg-[#fbbf24]/60 rounded-2xl text-[10px] w-fit'>Project: {item.Project}</p>
        </div>
          <DragArea onDrop={(position) => onDrop(title, index + 1)} colIndex={colIndex} />
       </div>
      ))}
    </div>
  );
};

export default TaskColumn;
