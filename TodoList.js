import React from 'react';

const TodoList = ({ todo, deleteItem, toggleCompleted }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteItem(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoList;

