import React, {useState} from 'react'

function ToDOList() {
    const [task, setTask]= useState(["eat breakfast","Take a shower","Wash the dishes"])
    const [newTask, setNewTask]= useState("")

    const handleInputChange=(e)=>{
        setNewTask(e.target.value)
    }
    const AddTask=()=>{
        if(newTask.trim() !==""){
            setTask(t=>[...t, newTask])
            setNewTask("")
        }
        
    }
    const DeleteTask=(index)=>{
        const deleteTasks=task.filter((_,i)=>i !=index)
        setTask(deleteTasks)
    }
    function moveTaskUp(index){
        // console.log('ok')
        if(index >0){
            const updatedTasks= [...task];
            [updatedTasks[index], updatedTasks[index - 1]]=
            [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks)
        }
    }

    const moveTaskDown=(index)=>{
        if(index < task.length-1){
            const updatedTasks= [...task];
            [updatedTasks[index], updatedTasks[index + 1]]=
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks)
        }
        
    }
    
  return (
    <>
    <div className="todo-list">
        <h1>ToDo List</h1>

        <div>
            <input type="text" 
            placeholder='Enter a Task'
            value={newTask}
            onChange={handleInputChange}/>
            <button className='add-button'
            onClick={AddTask}>Add Task</button>
        </div>
        <ol>
            {task.map((task, index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>DeleteTask(index)}>
                    Delete
                </button>
                <button className='move-button' onClick={()=>moveTaskUp(index)}>
                    Up
                </button>
                <button className='move-button' onClick={()=>moveTaskDown(index)}>
                    Down
                </button>
            </li>)}
        </ol>
    </div>
    </>
  )
}

export default ToDOList