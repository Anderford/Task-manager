import { useState } from 'react'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

const firstTask = {
    id: 455,
    taskDescription: 'Create new app',
    startDate: [1+'.',6+'.',2022+'.'],
    endDate: [8+'.',6+'.',2022+'.']
}

const secondTask = {
    id: 465,
    taskDescription: 'Learn js',
    startDate: [2+'.',6+'.',2022+'.'],
    endDate: [9+'.',6+'.',2022+'.']
}

const TaskManager = () => {
const [task, setTask] = useState([firstTask,secondTask])

const addTask = (userInput) => {
    if(userInput) {
    const newItem = {
        id: task.length,
        taskDescription: userInput
    }
    setTask([...task, newItem])
    }
}

const removeTask = (id) => {
    setTask([...task.filter((todo) => todo.id !== id)])
}

const clearAllTask = () => {
    setTask([])
}

return (
    <div className="taskManager">

         <TaskForm addTask={addTask} />
        <div className='taskManagerHeader'>
            <h1 className='taskInputTitle'>мои задачи</h1>
            <button className='clearTaskBtn' onClick={clearAllTask}>Удалить все</button>
        </div>
        {task.map((todo) => {
        return (
            <TaskItem
                todo={todo}
                key={todo.id}
                removeTask={removeTask}
            />
        )})}
    </div>
    );
}

export default TaskManager;