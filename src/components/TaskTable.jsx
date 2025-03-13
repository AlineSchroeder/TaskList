import React from 'react';
import TaskRow from './TaskRow';
import '../styles/TaskTable.scss';

function TaskTable({ tasks, setEditingTask, deleteTask, toggleTaskCompleted }) {
    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th>Tarefa</th>
                    <th>Status</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        setEditingTask={setEditingTask}
                        deleteTask={deleteTask}
                        toggleTaskCompleted={toggleTaskCompleted}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default TaskTable;
