import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState('')
  const [subject, setSubject] = useState('')
  const [dueDate, setDueDate] = useState('')

  return (
    <div className="app">
      <h1>Study Planner</h1>

      <p>Plan your studies and keep track of your tasks.</p>

      <h2>My Tasks</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
     
/>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
/>
      <input
        type="text"
        placeholder="Enter a study task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
     />
      <button
        onClick={() => {
         if (taskName.trim() !== '') {
          setTasks([
            ...tasks,
             {
                id: Date.now(),
                name: taskName,
                subject: subject,
                dueDate: dueDate,
                completed: false
  }
])

  setTaskName('')
  setSubject('')
  setDueDate('')
   }
}}  
>
  Add Task
</button>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
           <li key={task.id}>
             <input
               type="checkbox"
               checked={task.completed}
               onChange={() => {
                 setTasks(
                   tasks.map((item) =>
                    item.id === task.id
                     ? { ...item, completed: !item.completed }
                     : item
                  )
                )
            }}
    />
    {task.name}
    <div>
      <strong>{task.subject}</strong>
      <br />
      <small>Due: {task.dueDate}</small>
    </div>
    <button
      onClick={() => {
        setTasks(tasks.filter((item) => item.id !== task.id))
     }}
>
  Delete
</button>
  </li>
))}
        </ul>
      )}
    </div>
  )
}

export default App