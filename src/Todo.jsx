function Todo(props) {

    const hasDueDate = props.todo.dueDate != null

    return (
        <div>
                <p>{props.todo.task}</p> 
                {/* where .task and .dueDate is referencing the json data */}

                {hasDueDate ? (<p>Due Date: {props.todo.dueDate}</p>) : ("")}
                {props.todo.complete ? ("") : (<input type="checkbox" id="complete" name="complete"/>)}

                <input type="button" name="edit" id="edit" value="edit"/>

                <input type="button" name="delete" id="delete" value="delete"/>
        </div>
    )
}

export default Todo