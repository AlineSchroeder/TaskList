import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/TaskRow.scss';
import pencilIcon from '../assets/pencil.svg';
import trashIcon from '../assets/trash.svg';

function TaskRow({ task, deleteTask, toggleTaskCompleted, setEditingTask }) {
    const [completed, setCompleted] = useState(task.completed);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCheckboxChange = (e) => {
        const newValue = e.target.checked;
        setCompleted(newValue);
        toggleTaskCompleted(task.id, newValue);
    };

    const openDeleteModal = () => setShowDeleteModal(true);
    const closeDeleteModal = () => setShowDeleteModal(false);

    return (
        <>
            <tr className="task-row">
                <td>{task.title}</td>
                <td>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={handleCheckboxChange}
                    />
                </td>
                <td>
                    <button onClick={() => setEditingTask(task)}>
                        <img src={pencilIcon} alt="Editar" />
                    </button>
                    <button onClick={openDeleteModal}>
                        <img src={trashIcon} alt="Excluir" />
                    </button>
                </td>
            </tr>
            <Modal
                show={showDeleteModal}
                title="Deseja excluir esse item?"
                message={`Deseja excluir a tarefa "${task.title}"?`}
                onClose={closeDeleteModal}
                onConfirm={() => {
                    deleteTask(task.id);
                    closeDeleteModal();
                }}
                isEdit={false}
            />
        </>
    );
}

export default TaskRow;
