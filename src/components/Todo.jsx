import React, { Component } from 'react';

class Todo extends Component {
  state = {}
  render() {
    const { todo } = this.props;
    return (
      <div className='todo'>
        {/* Todo checkbox */}
        <input
          className='todo-status'
          type='checkbox'
          checked={todo.isCompleted}
        />
        {/* Todo title */}
        <span
          className={todo.isCompleted ? 'todo-tile completed' : 'todo-tile'}
        >
          {todo.title}
        </span>

        {/* Todo delete */}
        <span className='fa fa-close todo-delete'></span>

      </div>
    );
  }
}

export default Todo;