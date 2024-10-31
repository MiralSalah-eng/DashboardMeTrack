import React, { useEffect, useState } from 'react';
import DragArea from '../components/DragArea';
import TaskColumn from '../components/TaskColumn';
import { tasksList } from '../data';
import { Button } from '@mui/material';
import { HiCheckBadge, HiCog6Tooth, HiEye } from 'react-icons/hi2';
import { HiFlag } from 'react-icons/hi';
import AddNewForm from '../components/AddNewForm';

const Todo = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [activeCard, setActiveCard] = useState(null);
  const [newForm, setNewForm] = useState(false);


  const statusCategories = [
    {
      icon:HiFlag,
      status:'Not Started',
      color: "#6b7280"

    },
    {
      icon:HiCog6Tooth,
      status:'Working',
      color: "#f87171"
    },
    {
      icon:HiEye,
      status:'In Review',
      color: "#fbbf24"
    },
    {
      icon:HiCheckBadge,
      status:'Done',
      color: "#53ad5c"
    },

  ]

  const onDragStart = (taskId) => {
    setActiveCard(taskId);
  };

  const onDragEnd = () => {
    setActiveCard(null);
  };

  const onDrop = (status, position) => {

    if (activeCard === null) return;

    const taskToMove = tasks.find((task) => task.id === activeCard);

    if (!taskToMove) return;

    // Remove the task from its current position
    const updatedTasks = tasks.filter((task) => task.id !== activeCard);

    // Find the index to insert the task
    const tasksWithNewStatus = updatedTasks.filter((task) => task.Status === status);
    const insertIndex = position >= tasksWithNewStatus.length ? tasksWithNewStatus.length+1 : position;

    // Insert the task at the specified position
    updatedTasks.splice(insertIndex, 0, {
      ...taskToMove,
      Status: status,
    });

    setTasks(updatedTasks);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.Status === status);
  };


  const handleAddNew = () => {
    setNewForm(!newForm)
  }

  const handleNewTaskSubmit = (newTask) => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTaskWithId];
      console.log('Updated tasks:', updatedTasks); // Log to check
      return updatedTasks;
    });
    setNewForm(false);
  };

  useEffect(() => {
    console.log('Updated tasks:', tasks);
  }, [tasks]);

  const columns = [
    { header: 'Task' },
    { header: 'Assigned' },
    { header: 'Project' },
    { header: 'Status' },
  ];


  return (
        <div className='mt-6'>
             <h2 className='font-bold text-xl text-slate-800'>Todo List</h2>
             <span className='flex items-center justify-between flex-wrap gap-y-4 pr-6 mt-2 pb-2 border-b'>
                <p className='text-slate-600 max-w-96 text-sm '>
                  Organize and manage your tasks efficiently with our intuitive Todo List. 
                </p>
                <Button 
                variant='contained' 
                size='small' 
                disableElevation
                 sx={{backgroundColor:'#626bf7', paddingX:"20px"}}
                 onClick={()=>handleAddNew()}
                >
                  Add new task
                </Button>
             </span>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 '>
              {statusCategories.map((category, colIndex) => (
                <TaskColumn
                  key={category.status}
                  title={category.status}
                  tasks={getTasksByStatus(category.status)}
                  icon= {category.icon}
                  color= {category.color}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDrop={onDrop}
                  colIndex={colIndex}
                />
              ))}
            </div>

            {newForm && (
              <AddNewForm
              columns={columns}
              title="Task"
              handleNewTaskSubmit={handleNewTaskSubmit}
            />
            )}
        </div>
  );
};

export default Todo;
