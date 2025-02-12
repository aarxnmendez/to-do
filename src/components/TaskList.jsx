import Task from "./Task"

function TaskList({ taskList, onRemoveTask, onToggleTask }) {
  if (taskList.length === 0) {
    return <p className="no-tasks-message">No hay tareas para mostrar.</p>
  }

  return (
    <ul className="task-list">
      {taskList.map((task) => (
        <Task key={task.id} task={task} onRemove={() => onRemoveTask(task.id)} onToggle={() => onToggleTask(task.id)} />
      ))}
    </ul>
  )
}

export default TaskList

