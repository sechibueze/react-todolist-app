import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './components/Todo';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Build portfolio websites',
        isCompleted: false
      },
      {
        id: uuid(),
        title: 'Create Todolist app with reactjs',
        isCompleted: true
      },
      {
        id: uuid(),
        title: 'Build portfolio websites',
        isCompleted: false
      },
      {
        id: uuid(),
        title: 'Create wordpress tutorials',
        isCompleted: false
      },
      {
        id: uuid(),
        title: 'Teach on Udemy',
        isCompleted: false
      }
    ]
  }
  handleCompleted = (id) => {
    const { todos } = this.state;
    const updTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    });

    this.setState({ todos: updTodo });
  }

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    const { todos } = this.state;
    const total = todos.length;
    const completed = todos.filter(t => t.isCompleted === true).length
    const TodoList = todos.length === 0 ? <h3 className='well well-warning p-2'>No Todo, Add one</h3> : todos.map(todo =>
      <Todo
        key={`todo-${todo.id}-item`}
        todo={todo}
        handleCompleted={() => this.handleCompleted(todo.id)}
        handleDelete={() => this.handleDelete(todo.id)}
      />);
    return (
      <div className='app'>
        <Navbar />
        <div className='stats-board'>
          <div className='todo-stats'>
            COMPLETED<span className='badge badge-primary ml-3'>{completed}</span>
          </div>
          <div className='todo-stats'>
            TOTAL<span className='badge badge-info ml-3'>{total}</span>
          </div>
        </div>
        <div className='todolist'>
          {TodoList}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

