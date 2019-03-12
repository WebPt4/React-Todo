import React from 'react';

const todo = [
  {
    task: "Complete react 1 assignment",
    id: 14000001411,
    completed: false
  },

  {
    task: "Complete react 2 functional",
    id: 14000001422,
    completed: false
  },
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
      task: '',
      id: Math.random(),
    }
  }


  addToDo = e => {
    e.preventDefault();
    const newToDo = {
      id: this.state.id,
      task: this.state.task,
      completed: false,
    };
    console.log(newToDo);
    this.setState({
      todo: [...this.state.todo, newToDo],
    })
  }

  newTaskHandler = e => {
    this.setState({task: event.target.value});
  }

  render() {
    return (
      <div>
        {this.state.todo.map(newList => )}
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
