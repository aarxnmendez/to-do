import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"

function Task({ task, onRemove, onToggle }) {
  return (
    <motion.li
      className={`task ${task.done ? "checked" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="task-content">
        <input type="checkbox" checked={task.done} onChange={onToggle} />
        <span className="task-text">{task.text}</span>
      </div>
      <button onClick={onRemove} className="delete-btn">
        <Trash2 size={16} />
      </button>
    </motion.li>
  )
}

export default Task

