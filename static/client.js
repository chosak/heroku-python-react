import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.jsx';


ReactDOM.render(
    <TodoList {...window.__initial_props} />,
    document.getElementById('todo-list')
);
