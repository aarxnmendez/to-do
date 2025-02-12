import { useState, useEffect } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]")
  })
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  const handleAddTask = (taskText) => {
    if (taskText.trim() === "") {
      setError("La tarea no puede estar vacía")
    } else {
      setError("")
      const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
      }
      setTasks([...tasks, newTask])
    }
  }

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done
    if (filter === "completed") return task.done
    return true
  })

  return (
    <>
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      {error && <p className="error">{error}</p>}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          Todas
        </button>
        <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>
          Pendientes
        </button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>
          Completadas
        </button>
      </div>
      <TaskList taskList={filteredTasks} onRemoveTask={handleRemoveTask} onToggleTask={handleToggleTask} />
    </>
  )
}

export default App