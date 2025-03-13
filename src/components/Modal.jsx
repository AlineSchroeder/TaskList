import React, { useState, useEffect } from 'react';
import '../styles/Modal.scss';

function Modal({ show, title, onClose, onConfirm, addTask, editingTask, isEdit }) {
    const [titleTask, setTitleTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitleTask(editingTask.title);
            setDescriptionTask(editingTask.description);
        } else {
            setTitleTask('');
            setDescriptionTask('');
        }
    }, [editingTask]);

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
                <h2>{title}</h2>
                {isEdit && (
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
                )}
                <div className="modal-buttons">
                    <button className="modal-cancel" onClick={onClose}>
                        Não
                    </button>
                    <button className="modal-confirm" onClick={isEdit ? handleSubmit : onConfirm}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
