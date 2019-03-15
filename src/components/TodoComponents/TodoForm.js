import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.addTodo}>
            <input type="text" onChange={props.handleChanges} name="item" 
                value={props.inputValue} placeholder="Add todo here" />
            <button type="submit">Add Todo</button>
        </form>
    )  
};

export default TodoForm;