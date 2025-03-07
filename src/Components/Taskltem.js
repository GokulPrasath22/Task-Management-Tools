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

      <svg
      //  onClick={()=>setEdit(task.id)}
       id='edit' 
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>

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