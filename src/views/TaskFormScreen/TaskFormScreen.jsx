import { useState } from 'react'
import { Link } from 'react-router'
import './TaskFormScreen.css'
let nextId = 0

function TaskFormScreen() {
  const [task, setTask] = useState({ title: '', description: '' })
  const [taskArray, setTaskArray] = useState([])

  const addTask = () => {
    let newTask =  {
      id: nextId++,
      title: task.title,
      description: task.description
    }

    setTaskArray([...taskArray, newTask])
    localStorage.setItem('taskArray', JSON.stringify(taskArray))
  }

  return (
    <>
      <div><Link to='/'> List </Link></div>
      <h1>Task Form</h1>
      <form>
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

        <div>
          <span onClick={addTask}>
            Add taks
          </span>
        </div>
      </form>
    </>
  )
}

export default TaskFormScreen