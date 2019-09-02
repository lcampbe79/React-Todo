import React from 'react';
import ReactDom from 'react-dom';
import './components/TodoComponents/Todo.css'
import TodoList from './components/TodoComponents/TodoList.js'

const TodoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: TodoData
    }
  }
  
  clickHandler = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList {...this.state} clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
