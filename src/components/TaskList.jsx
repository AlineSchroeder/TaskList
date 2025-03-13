import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.scss';

function TaskList({ tasks, setEditingTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    setEditingTask={setEditingTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;