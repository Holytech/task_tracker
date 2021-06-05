const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
            <b onClick={ () => onDelete(task.id)} style={{color:'red', cursor:'pointer'}}>X</b> 
            </h3>
            <i>{task.day}</i>
        </div>
    )
}

export default Task
