import { useState } from 'react'

const TaskForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    
    return (
        <form onSubmit={handleSubmit} >
            <input className='taskInput'
                value={userInput}
                type="text"
                maxLength="240"
                onChange={handleChange}
                placeholder="Добавить задачу"
            />        
            <button className='taskInputBtn'>Сохранить</button>
        </form>
    )
}

export default TaskForm