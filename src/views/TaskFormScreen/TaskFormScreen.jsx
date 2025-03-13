import { useState } from 'react'
import './TaskFormScreen.css'


function TaskFormScreen() {
  const [task, setTask] = useState({ title: '', description: '' })

  return (
    <>
      <h1>Task Form</h1>
      <form action="">
        <div className='form-item'>
          <label>Title: </label>
          <input
            type="text"
            value={task.title}
            onChange={e => setTask({...task, title: e.target.value})}
          />
        </div>
       
        <div className='form-item'>
          <label>Description: </label>
          <input
            type="text"
            value={task.description}
            onChange={e => setTask({...task, description: e.target.value})}
          />
        </div>
      </form>
    </>
  )
}

export default TaskFormScreen