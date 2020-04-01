import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './components/Todo';
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
  render() {
    const { todos } = this.state;
    const TodoList = todos.map(todo => <Todo todo={todo} />);
    return (
      <div className='app'>
        <Navbar />

        <div className='list-group todolist'>
          {TodoList}
        </div>
      </div>
    );
  }
}

export default App;

