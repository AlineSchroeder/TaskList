import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import db from './mock/mockups';

function App() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        setTasks(db);
    }, []);

    const addTask = (newTask) => {
        if (editingTask) {
            const updatedTasks = tasks.map((task) =>
                task.id === editingTask.id ? { ...task, ...newTask } : task
            );
            setTasks(updatedTasks);
            setEditingTask(null);
        } else {
            const newId = tasks.length + 1;
            const taskWithId = { ...newTask, id: newId };
            setTasks([...tasks, taskWithId]);
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleTaskCompleted = (id, completed) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <Header />
            <Main
                tasks={tasks}
                addTask={addTask}
                editingTask={editingTask}
                deleteTask={deleteTask}
                toggleTaskCompleted={toggleTaskCompleted}
                setEditingTask={setEditingTask}
            />
        </div>
    );
}

export default App;
