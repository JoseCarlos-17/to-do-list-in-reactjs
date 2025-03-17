import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ListScreen from './views/ListScreen/ListScreen'
import TaskFormScreen from './views/TaskFormScreen/TaskFormScreen'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListScreen/>} />
        <Route path='/taskform' element={<TaskFormScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
