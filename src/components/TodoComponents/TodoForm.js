import React from 'react';

class TodoFormList extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitItem = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.submitItem}>
        <input 
          type='text'
          value={this.state.task}
          name='task'
          onChange={this.handleChanges}
        />
        <button >Add Todo</button>
        <button onClick={(e) => {
          e.preventDefault(); 
          this.props.clearCompleted();
        }}>Clear Completed</button>
      </form>
    )
  }
}

export default TodoFormList;