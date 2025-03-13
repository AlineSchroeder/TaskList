import React, { useState } from 'react';
import TaskTable from './TaskTable';
import Modal from './Modal';
import AddTaskModal from './AddTaskModal';
import '../styles/Main.scss';
import moreIcon from '../assets/more.svg';

function Main({ tasks, addTask, deleteTask, toggleTaskCompleted, setEditingTask, editingTask }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    const openAddModal = (task) => {
        if (task) {
            setEditingTask(task);
            setShowAddModal(true);
        } else {
            setShowAddTaskModal(true);
        }
    };
    const closeAddModal = () => setShowAddModal(false);
    const closeAddTaskModal = () => setShowAddTaskModal(false);

    return (
        <main className="main">
            <div className="main-message">
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            </div>
            <TaskTable
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTaskCompleted={toggleTaskCompleted}
                setEditingTask={openAddModal}
            />
            <div className="add-task-row">
                <p>Nova tarefa...</p>
                <img src={moreIcon} alt="Adicionar Tarefa" onClick={() => openAddModal(null)} />
            </div>

            <Modal
                show={showAddModal}
                title={editingTask ? "Editar tarefa" : "Adicionar tarefa"}
                onClose={closeAddModal}
                addTask={addTask}
                editingTask={editingTask}
                isEdit={!!editingTask}
            />

            <AddTaskModal
                show={showAddTaskModal}
                onClose={closeAddTaskModal}
                addTask={addTask}
            />
        </main>
    );
}

export default Main;
