import React from 'react';

class TodoFormList extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }
  render() {
    return(
      <form>
        <input
          type='text'
          value={this.state.task}
          name='task'
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}

export default TodoFormList;