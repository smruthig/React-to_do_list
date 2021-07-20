import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
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

  //Toggle reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) =>
      task.id == id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks')
      }
    </div>
  );
}

export default App;
