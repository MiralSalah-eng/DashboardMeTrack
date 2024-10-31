import React, { useState } from 'react';

const DragArea = ({ onDrop, colIndex }) => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <div
      className={`${showDropArea ? 'opacity-1 border-dashed bg-slate-200 border-2 text-slate-400 border-slate-700 text-sm w-full h-full p-5 rounded-md transition-all ease-in-out duration-200' : 'opacity-0'}`}
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      onDrop={(e) => { 
        e.preventDefault(); 
        const position = e.dataTransfer.getData('text/plain');
        onDrop(colIndex, parseInt(position, 10));
        setShowDropArea(false); 
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop here
    </div>
  );
};

export default DragArea;
