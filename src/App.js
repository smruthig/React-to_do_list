import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Eat breakfast',
            day: 'Jan 4th at 2:30pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Dentist appointment',
            day: 'Jan 7th at 4:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Write exam',
            day: 'Jan 9th at 2:00pm',
            reminder: true,
        }
    ]
  )

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks')
      }
    </div>
  );
}

export default App;
