import { useState } from "react"

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(taskText)
    setTaskText("")
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Introduce tu tarea"
      />
      <button type="submit">Añadir tarea</button>
    </form>
  )
}

export default TaskForm

