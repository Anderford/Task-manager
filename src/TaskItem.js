import icon from './img/close_icon.png'
const Task = ({ todo, removeTask }) => {
    return (
        <div key={todo.id} className="taskCardWrap">
            <div className="taskCard">
                {todo.taskDescription}
            </div>
            <div onClick={() => removeTask(todo.id)}>
                <img src={icon} alt="X" className='removeTask'/>
            </div>
            
        </div>
    )
}

export default Task