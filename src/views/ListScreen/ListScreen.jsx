
import './ListScreen.css'
import { Link } from 'react-router'

function ListScreen() {
  return (
    <>
      <div><Link to='/taskform'>Form</Link></div>
      <h1>Tasks</h1>
      <ul>{localStorage.getItem('taskArray')}</ul>
    </>
  )
}

export default ListScreen