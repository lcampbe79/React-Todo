import React from 'react';
import ReactDom from 'react-dom';

import Todo from './components/TodoComponents/Todo.js'
import TodoList from './components/TodoComponents/TodoList.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: Todo
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList {...this.state} />
      </div>
    );
  }
}

export default App;
