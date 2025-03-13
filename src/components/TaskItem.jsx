import React from 'react';
import '../styles/TaskItem.scss';

function TaskItem({ task, setEditingTask, deleteTask }) {
    return (
        <li className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="task-actions">
                <button onClick={() => setEditingTask(task)}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>Excluir</button>
            </div>
        </li>
    );
}

export default TaskItem;