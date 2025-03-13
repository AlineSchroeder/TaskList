import React, { useState, useEffect } from 'react';
import '../styles/TaskForm.scss';

function TaskForm({ addTask, editingTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask({ title, description });
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">{editingTask ? 'Editar' : 'Adicionar'}</button>
        </form>
    );
}

export default TaskForm;
