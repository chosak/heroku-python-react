import React from 'react';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    render() {
        return (
            <li>
                {this.props.text}&nbsp;
                <span
                    role="button"
                    className="glyphicon glyphicon-remove text-danger"
                    aria-hidden="true"
                    aria-label="Remove"
                    onClick={this.onRemove}
                />
            </li>
        );
    }

    onRemove(e) {
        e.preventDefault();
        this.props.removeTodo(this.props.text);
    }
}


class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                >Add</button>
            </form>
        );
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.text) {
            this.props.addTodo(this.state.text);
            this.setState({text: ''});
        }
    }
}


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: props.todos || []};
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    render() {
        var count = this.state.todos.length;
        return (
            <div className="todo-list">
                <h1>
                    TODO List&nbsp;
                    <small>{this.state.todos.length} left</small>
                </h1>
                <ul>
                    {this.state.todos.map((todo, index) => <Todo
                        key={index}
                        text={todo}
                        removeTodo={this.removeTodo}
                    />)}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
    addTodo(todo) {
        this.setState({todos: this.state.todos.concat([todo])});
    }

    removeTodo(todo) {
        this.setState({todos: this.state.todos.filter(
            function(t) { return t != todo; }
        )});
    }
}


export default TodoList;
