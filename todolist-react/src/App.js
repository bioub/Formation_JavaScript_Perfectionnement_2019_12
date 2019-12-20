import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'ABC',
      completed: false
    }, {
      id: 2,
      title: 'DEF',
      completed: true
    }],
    todo: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.todo,
          completed: false,
        }
      ]
    })
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value,
    })
  }

  handleToggleClick = (event) => {
    this.setState({
      todos: this.state.todos.map(t => ({
        ...t,
        completed: event.target.checked
      })),
    })
  }

  render() {
    const todos = this.state.todos.map((t) => (
      <div>
        <input type="checkbox" checked={t.completed} />
          <span>{t.title}</span>
          <button>-</button>
      </div>
    ))

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" onClick={this.handleToggleClick}/>
          <input value={this.state.todo} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <div>
          {todos}
        </div>
      </div>
    );
  }
}

export default App;
