import React, { useState } from 'react';
import '../styles/Modal.scss';

function AddTaskModal({ show, onClose, addTask }) {
    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');

    if (!show) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleTask.trim()) {
            addTask({ title: titleTask, description: descriptionTask });
            setTitleTask('');
            setDescriptionTask('');
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Deseja adicionar tarefa?</h2>
                <form onSubmit={handleSubmit} className="task-form">
                    <input
                        type="text"
                        placeholder="Título da tarefa"
                        value={titleTask}
                        onChange={(e) => setTitleTask(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição da tarefa"
                        value={descriptionTask}
                        onChange={(e) => setDescriptionTask(e.target.value)}
                    />
                </form>
                <div className="modal-buttons">
                    <button className="modal-cancel" onClick={onClose}>
                        Não
                    </button>
                    <button className="modal-confirm" onClick={handleSubmit}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskModal;
