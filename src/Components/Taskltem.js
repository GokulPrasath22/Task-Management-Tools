import React from 'react'
import toask from 'react-hot-toast'
import './Taskltem.css'
import { useDrag } from 'react-dnd'
import {useState} from 'react'
import TodoEdit from './TodoEdit'

const Taskltem = ({task, tasks, setTasks}) => {
  const [edit,setEdit] = useState(false)
  const [{ isDragging }, drag] = useDrag(()=>({
    type: "task",
    item:{id : task.id},
    collect:(monitor)=>({
      isDragging:!!monitor.isDragging()
    })
  }))

  const handleRemove = (taskid) => {
    const fTasks = tasks.filter(t => t.id !== taskid);

    setTasks(fTasks)
    localStorage.setItem('tasks', JSON.stringify(fTasks));
    toask.success("Task removed successfully")
    // console.log(taskid)
   }

   const handleEdit = (taskid) => {
    const fTasks = tasks.filter(t => t.id === taskid);

    setEdit(fTasks)
    localStorage.setItem('tasks', JSON.stringify(fTasks));
    toask.success("Task removed successfully")
   }

  return (
    <>
    {edit?
    <TodoEdit name={task.name}/>:
    <div className={`task-item ${task.status}`}ref={drag}>
      <p>{task.title}</p>
      <svg 
      onClick={()=>{handleRemove(task.id)}} 
      id='Remove'
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    </div>}
    
    
    </>
    
  )
}

export default Taskltem;