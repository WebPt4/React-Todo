import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const list = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list,
      inputValue: '',
    }
  }


  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      item: this.state.inputValue,
      completed: false,
    }
    console.log(newTodo);
    this.setState({
      list: [...this.state.list, newTodo],
      inputValue: '',
    })
  }

  handleChanges = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>To Do:</h2>
        <TodoList list={this.state.list} />
        <TodoForm addTodo={this.addTodo} value={this.inputValue} handleChanges={this.handleChanges} />
        <button>Delete Completed</button>
      </div>
    );
  }
}

export default App;
