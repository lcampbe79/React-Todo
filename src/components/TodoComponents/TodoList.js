import React from 'react'
import Todo from './Todo'


const TodoList = props => {
  //console.log(props)
  return(
    <div>
      {props.todo.map(task => (
        <Todo key={task.id} item={task} clickHandler={props.clickHandler}/>
      ))}
    </div>
  );
};


export default TodoList;