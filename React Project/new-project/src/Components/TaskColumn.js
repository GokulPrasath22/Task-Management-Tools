import React from 'react'
import Taskltem from './Taskltem';
import { useDrop } from 'react-dnd'


const TaskColumn = ({
    status,
    tasks,
    setTasks,
    todos,
    inprogress,
    closed
}) => {
    // console.log(tasks)
    const [{ isOver }, drop] = useDrop(()=>({
        accept: "task",
        drop:(item)=> addItemTocollum(item.id),
        collect:(monitor)=>({
          isDragging:!!monitor.isOver()
        })
      }))

    let tasksByStatus = todos;
    if(status == "inprogress"){tasksByStatus = inprogress};
    if(status == "closed"){tasksByStatus = closed};

    const addItemTocollum=(id)=> {
        // console.log("dropped",id,status)

        setTasks((prev)=>{
            const mTasks = prev.map(t=>{
                if(t.id == id){
                    return {...t, status : status}
                }
                return t;
            })
                return mTasks;
        })
    }


  return (
    <div className='col' ref={drop}>
        <h1>{status.toUpperCase()}</h1>
        <div className='tasklist'>
            {tasksByStatus.length > 0 && tasksByStatus.map((task)=>(
                <Taskltem key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
            ))}
            </div>
        </div>
  )
}

export default TaskColumn;